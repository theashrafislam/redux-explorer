import React from "react";

const Button = ({ type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white uppercase font-semibold rounded-lg shadow-md transition-all duration-300 ${
        type === "increase" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
      }`}
    >
      {type === "increase" ? "Increase" : "Decrease"}
    </button>
  );
};

export default Button;