import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    //clean up
    return () => unsubscribe();
  }, [navigate]);

  // Value to be passed through the context
  const value = { currentUser, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children when loading is done */}
    </AuthContext.Provider>
  );
}
