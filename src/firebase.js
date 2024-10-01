import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5CnVHHmmcrlh6DsoG-gveyk_zIPxQgw0",
  authDomain: "desk-68b1d.firebaseapp.com",
  projectId: "desk-68b1d",
  storageBucket: "desk-68b1d.appspot.com",
  messagingSenderId: "946109569246",
  appId: "1:946109569246:web:f10984604ef1bcc30f8a4f",
  measurementId: "G-2SZBQQ612F",
};
let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
export { auth, db, storage };
