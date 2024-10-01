import { db } from "../firebase"; // Adjust the path as necessary
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";

export const addData = async (collectionName, data, id = null) => {
  try {
    if (id == null) {
      const docRef = await setDoc(collection(db, collectionName), data);
      return docRef.id;
    } else {
      const docRef = await addDoc(collection(db, collectionName), data);
      return docRef.id;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (collectionName, id = null) => {
  try {
    if (id == null) {
      const doc = await getDocs(collection(db, collectionName));
      return doc;
    } else {
      const querySnapshot = await getDoc(doc(db, collectionName, id));
      return querySnapshot;
    }
  } catch (error) {
    console.log(error);
  }
};
