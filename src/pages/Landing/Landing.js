import Card from "./Card";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const card1 = {
    style: {
      background:
        "url(https://www.aacc.edu/media/college/images/facilities/exterior/13RITCHY_1_107_c_1200x600-1.jpg)",
      borderRadius: "25px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };

  const card2 = {
    style: {
      background: 'url("https://i.ibb.co/JcYbrj5/school-background2.png")',
      backgroundColor: "#fff",
      borderRadius: "25px",
    },
    animation: "slide",
  };
  const card4 = {
    style: {
      background: "#b53ff8",
      borderRadius: "25px",
    },
  };
  const card3 = {
    style: {
      background: "#000",
      borderRadius: "25px",
    },
  };

  return (
    <main className="landing-page">
      <div className="grid">
        <Card card={card1}>
          <div
            className="aacc-card"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: 25,

              background: "linear-gradient(to right, #4facfe, #00f2fe)",
            }}
          />
          <h1 style={{ zIndex: 9 }}>For AACC students,</h1>
          <h1 style={{ zIndex: 9 }}>by AACC students.</h1>
        </Card>
        <Card card={card2}>
          <h1 style={{ color: "black", padding: 40, textAlign: "left" }}>
            The home for all your study materials.
          </h1>
        </Card>
        <Card card={card3}>
          <h1 style={{ color: "white", padding: 40, textAlign: "center" }}>
            Organize and share notes. 📓
          </h1>
        </Card>
        <Card card={card4}>
          <div
            style={{
              padding: "0 50px",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <h1 style={{ textAlign: "center", color: "#fff" }}>
              Welcome to The AACC Desk!
            </h1>
            <button
              onClick={() => navigate("/signup")}
              className="signup-button"
            >
              Sign Up
            </button>
            <br />
            <button onClick={() => navigate("/login")} className="login-button">
              Log In
            </button>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Landing;
