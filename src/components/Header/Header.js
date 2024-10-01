import React, { useState } from "react";
import aaccLogo from "../../assets/aacc-logo.png";
import aaccLogoDark from "../../assets/aacc-logo-dark.png";
import "./Header.css";

const Header = ({ theme = "light" }) => {
  return (
    <header>
      <img src={theme == "light" ? aaccLogo : aaccLogoDark} width={30} />
      <h2>Desk</h2>
      <div>
        <img
          className="profile-img"
          src="https://cdn-icons-png.flaticon.com/128/6522/6522537.png"
        />
      </div>
    </header>
  );
};

export default Header;
