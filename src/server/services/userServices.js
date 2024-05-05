import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const dbref = collection(db, "users");

class userServices {
  async verifyPhone(phone) {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          toast.success("Recaptcha resolved");
        },
        "expired-callback": () => {
          toast.error("Recaptcha expired");
        },
      }
    );
    await recaptchaVerifier.render();
    try {
      return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
    } catch (error) {
      toast.error("OTP failed from service");
    }
  }
  async sendEmail(email) {
    try {
      sendSignInLinkToEmail(auth, email, {
        url: window.location.href,
        handleCodeInApp: true,
      }).then(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
          let email = window.localStorage.getItem("emailForSignIn");
          if (!email) {
            email = window.prompt("Please provide your email for confirmation");
          }
          signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
              window.localStorage.removeItem("emailForSignIn");
            })
            .catch((error) => {});
          // amezi
        }
      });
    } catch (error) {
      toast.error("Email failed from service");
    }
  }
  async signOut() {
    try {
      if (window.confirm("Do you want to SignOut?")) {
        auth.signOut();
      }
    } catch (error) {
      toast.error("Sign out failed from service");
    }
  }

  async addUser(data) {
    const docRefUser = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRefUser);
    if (docSnap.exists()) {
      return updateDoc(docRefUser, data);
    } else {
      return setDoc(docRefUser, data);
    }
  }
  updateUser(id, data) {
    const docRef = doc(db, "users", id);
    return updateDoc(docRef, data);
  }
  deleteUser(id) {
    const docRef = doc(db, "users", id);
    return deleteDoc(docRef);
  }
  getUsers() {
    return getDocs(dbref);
  }
  async getUser(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data;
  }
  async getSelf() {
    try {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      return data;
    } catch {
      const data = { name: "Guest" };
      return data;
    }
  }
}
const service = new userServices();
export default service;
