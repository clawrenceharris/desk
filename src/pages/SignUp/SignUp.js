import React, { useState } from "react";
import { signUp } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../services/user";
import { checkValidEmail } from "../../utils";
import AuthForm from "../../components/AuthForm/AuthForm";
const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    if (!checkValidEmail(email)) {
      setError(
        "Invalid email. Make sure to use your AACC email (ending in @mymail.aacc.edu)"
      );
    } else {
      signUp(email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          addUser(user.uid, email.substring(0, 5), "", "", email).then(() => {
            navigate("/home");
          });
        })
        .catch((error) => {
          // Handle Errors
          setError(error.message);
        });
    }
  };

  return (
    <main className="auth-page">
      <AuthForm
        error={error}
        authType={"signup"}
        onSubmit={handleSubmit}
        onChange={() => setError("")}
      />
    </main>
  );
};

export default SignUp;
