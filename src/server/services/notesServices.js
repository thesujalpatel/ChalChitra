import { db } from "../firebase";
import { auth } from "../firebase";
import {
  collection,
  updateDoc,
  deleteDoc,
  doc,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

class notesServices {
  async createNote(note) {
    const dbref = collection(db, "users", auth.currentUser.uid, "notes");
    return await addDoc(dbref, { ...note, updatedAt: serverTimestamp() });
  }
  async updateNote(id, note) {
    const docRef = doc(db, "users", auth.currentUser.uid, "notes", id);
    return await updateDoc(docRef, { ...note, updatedAt: serverTimestamp() });
  }
  ListernToNotes(callback) {
    try {
      const dbref = collection(db, "users", auth.currentUser.uid, "notes");
      const unsubscribe = onSnapshot(dbref, (snapshot) => {
        let list = [];
        snapshot.docs.map((doc) => {
          return list.push({ id: doc.id, ...doc.data() });
        });
        // Sort notes by updatedAt in descending order
        list.sort((a, b) => b.updatedAt?.toMillis() - a.updatedAt?.toMillis());
        callback(list);
      });
      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteNoteById(id) {
    const docRef = doc(db, "users", auth.currentUser.uid, "notes", id);
    return await deleteDoc(docRef);
  }
}
const service = new notesServices();
export default service;
