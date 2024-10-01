import React from "react";
import "./Landing.css";
const Card = ({ children, card }) => {
  return (
    <div
      className={card.animation && card.animation}
      style={{
        flex: 1,
        position: "relative",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...card.style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
