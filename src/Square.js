import React from "react";

const Square = ({ value, onClick, winner }) => {
  return (
    <button
      className={
        (value === "X" ? "x" : "o") + " square " + (winner ? "win" : null)
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
