import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { addData } from "./firestore";
import { AACC_DESK_ID } from "../constants";

export const createDesk = async (deskId) => {
  try {
    const deskRef = doc(collection(db, "desks"), deskId);
    await setDoc(deskRef, {
      deskId,
      public: true,
      itemCount: 0,
    });
    return { success: true };
  } catch (error) {
    console.log("Error occurred while creating desk: " + error);
    throw error;
  }
};
export const addDeskItem = async (name, url, uploadedAt) => {
  try {
    const deskData = {
      name,
      url,
      likes: [],
      description: "",
      course: "",
      uploadedAt,
    };

    const fileDocRef = doc(collection(db, "desks", AACC_DESK_ID, "desk-items"));

    await setDoc(fileDocRef, deskData);
  } catch (error) {
    console.log("Error occurred while creating desk: " + error);
    throw error;
  }
};
