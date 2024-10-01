import Header from "../Header";
import "./Desks.css";
import { useData } from "../../context/DataContext";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { uploadFile } from "../../services/storage";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { AACC_DESK_ID } from "../../constants/";
import { addDeskItem } from "../../services/desk";
const Desks = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [desks, setDesks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedDeskId, setSelectedDeskId] = useState(AACC_DESK_ID);
  useEffect(() => {
    const fetchDesks = async () => {
      setLoading(true);

      try {
        const docRef = doc(db, "desks", AACC_DESK_ID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDesks([{ id: docSnap.id, ...docSnap.data() }]);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching desks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDesks();

    console.log(desks);
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const path = `users/${user.uid}/desks/${selectedDeskId}/files/${selectedFile.name}`;

      const url = await uploadFile(selectedFile, path);
      await addDeskItem(selectedFile.name, url, new Date());
      setMessage(selectedFile.name + " was successfully added to the Desk!");
    } catch (error) {
      setMessage("Sorry, an error occured. Your file was not uploaded :(");
    }

    console.log("File uploaded successfully");
    setSelectedFile(null);
  };

  if (loading) {
    return null;
  }
  return (
    <main>
      {selectedFile ? (
        <h4 style={{ color: "gray" }}>
          Select "Upload" to add{" "}
          <span style={{ color: "#b53ff8" }}>{selectedFile.name}</span> to the
          Desk!
        </h4>
      ) : (
        <h4 style={{ color: "gray" }}>
          Select "Add" to start uploading your study materials!
        </h4>
      )}
      {selectedFile ? (
        <button style={{ width: 60, height: 60 }} onClick={handleUpload}>
          Upload
        </button>
      ) : (
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }} // Hide the default input
          />
          <label
            htmlFor="file-upload" // Link label to input
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Add
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            style={{ display: "none" }} // Ensure it's hidden
          />
        </div>
      )}

      {message && <p>{message}</p>}
    </main>
  );
};

export default Desks;
