import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center",
      zIndex: 999
    }}>
      <div style={{
        backgroundColor: "white", padding: "20px", borderRadius: "10px",
        minWidth: "300px"
      }}>
        <button onClick={onClose} style={{ float: "right" }}>❌</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
