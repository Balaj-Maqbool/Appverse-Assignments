import React from "react";

const Button = ({ label, onClick, variant = "primary" }) => {
  const styles = {
    primary: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "#f8f9fa",
      color: "#333",
      border: "1px solid #ccc",
    },
  };

  return (
    <button style={{ padding: "10px 20px", borderRadius: "5px", ...styles[variant] }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
