import { useEffect, useState } from "react";
import Desks from "../../components/Desks/Desks";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";
import { getData } from "../../services/firestore";
import { logOut } from "../../services/auth";
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
              onClick={() => {
                logOut();
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
