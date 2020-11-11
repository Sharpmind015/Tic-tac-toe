import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className={(value === "X" ? "x" : "o") + " square"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
