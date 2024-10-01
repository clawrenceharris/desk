import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AACC_DESK_ID } from "../constants/";
export const addUser = (userId, username, displayName, photoURL, email) =>
  new Promise((resolve, reject) => {
    const userRef = doc(db, "users", userId);

    const userData = {
      uid: userId,
      username,
      displayName,
      photoURL: photoURL || null,
      email,
      desks: [AACC_DESK_ID],
      friends: [],
    };

    setDoc(userRef, userData)
      .then(() => {
        resolve("User added successfully!");
      })
      .catch((error) => {
        reject("Error adding user: ", error);
      });
  });
