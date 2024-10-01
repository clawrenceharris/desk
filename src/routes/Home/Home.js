import React from "react";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import Header from "../components/Header";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Desks from "../components/Desks/Desks";
import { getData } from "../services/firestore";

const HomeScreen = () => {
  const { currentUser } = useAuth(); // Get currentUser data
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const userSnapshot = await getData("users", currentUser.uid);
      setUserData(userSnapshot.data());
      setLoading(false);
    };

    fetchUser();
  }, [currentUser.uid]);

  if (loading) {
    return <Header theme="dark" />;
  } else {
    return (
      <div>
        <Header theme="dark" />
        <main>
          <div>
            <h1 style={{ color: "black" }}>Welcome, {userData.username}</h1>

            <Desks user={userData} />
            <button
              onClick={(e) => {
                auth.signOut();
              }}
            >
              Log out
            </button>
          </div>
        </main>
      </div>
    );
  }
};

export default HomeScreen;
