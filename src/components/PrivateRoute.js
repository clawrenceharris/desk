import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth(); // Get the user from context
  if (!loading) {
    return currentUser ? children : <Navigate to="/" />;
  }
}

export default PrivateRoute;
