import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./routes/SignUp/SignUp";
import LogIn from "./routes/LogIn/LogIn";
import { Landing } from "./routes/Landing";
import HomeScreen from "./routes/Home/Home";
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomeScreen />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
