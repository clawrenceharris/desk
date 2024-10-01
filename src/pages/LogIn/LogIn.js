import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../services/auth";
import AuthForm from "../../components/AuthForm/AuthForm";

const LogIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (email, password) => {
    if (!isValidEmail(email)) {
      setError("Invalid email address");
    } else {
      logIn(email, password)
        .then((userCredential) => {
          //Log in successful
          const user = userCredential.user;
          navigate("/home");
          console.log("User created: ", user);
        })
        .catch((error) => {
          // Handle Errors
          setError("error: " + error);
        });
    }
  };
  /**
   * Checks that the given email is valid, such that it matches an aacc student email
   * @param {*} email The email to check
   * @returns wether or not the email is valid
   */
  const isValidEmail = (email) => {
    return email.endsWith("@mymail.aacc.edu");
  };

  return (
    <main className="auth-page">
      <AuthForm
        error={error}
        authType={"login"}
        onSubmit={handleSubmit}
        onChange={() => setError("")}
      />
    </main>
  );
};

export default LogIn;
