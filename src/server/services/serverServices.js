import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const dbref = collection(db, "server");

class serverDataService {
  async addServer(id, data) {
    const docRefServer = doc(db, "server", id);
    const docSnap = await getDoc(docRefServer);
    if (docSnap.exists()) {
      return updateDoc(docRefServer, data);
    }
    return setDoc(docRefServer, data);
  }
  updateServer(id, data) {
    const docRef = doc(db, "server", id);
    return updateDoc(docRef, data);
  }
  deleteServer(id) {
    const docRef = doc(db, "server", id);
    return deleteDoc(docRef);
  }
  getServers() {
    return getDocs(dbref);
  }
  async getServer(id) {
    const docRef = doc(db, "server", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const exists = docSnap.exists();
    return { data, exists };
  }
}
const server = new serverDataService();
export default server;
