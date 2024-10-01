import { useState } from "react";
import logo from "../../assets/aacc-logo.png";
import "./AuthForm.css";
const AuthForm = ({ authType, onSubmit, error, onChange }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password); // Call the passed submit function
  };

  return (
    <div className="auth-container">
      <div className="auth-container-left">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={logo} width={150} />
          <h1>For AACC students, by AACC students</h1>
        </div>

        <div className="auth-container-right">
          <h1>Welcome to the AACC Desk!</h1>
          {authType == "login" ? (
            <p>
              Log in to organize and share your notes, flashcards and more all
              in one place.
            </p>
          ) : (
            <p>
              Sign up to start organizing and sharing your notes, flashcards and
              more all in one place.
            </p>
          )}

          <br />
          <form
            style={{
              width: "70%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              style={{ width: "100%" }}
              type="email"
              placeholder="Enter your AACC email"
              value={email}
              onChange={(e) => {
                onChange();
                setEmail(e.target.value);
              }}
              className="input"
            />
            <br />

            <input
              style={{ width: "100%" }}
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => {
                onChange();
                setPassword(e.target.value);
              }}
              className="input"
            />
            <div style={{ height: 20 }}>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            {authType == "login" ? (
              <button
                style={{ width: "100%" }}
                onClick={handleSubmit}
                className="button"
              >
                Log in
              </button>
            ) : (
              <button onClick={handleSubmit} className="button">
                Let's Go!
              </button>
            )}
          </form>

          {authType == "login" ? (
            <p>
              Don't have an account?{" "}
              <span>
                <a href="/signup">Sign up</a>
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span>
                <a href="/login">Log back in</a>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
