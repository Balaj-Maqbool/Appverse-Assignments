import { useState } from "react";
import { Button, Card, Modal } from "my-components-lib"; // adjust the path as needed

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Card title="Hello Balaj! 👋">
        <p style={{ marginBottom: "20px", fontSize: "1rem", color: "#555" }}>
          This is a **reusable Card** component from your own UI library.
        </p>
        <Button label="Open Modal" onClick={() => setOpen(true)} variant="primary" />
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 style={{ marginBottom: "10px" }}>🚀 Welcome!</h2>
        <p style={{ fontSize: "1rem", color: "#333" }}>
          This modal is also a part of your component library.
        </p>
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Button label="Close" onClick={() => setOpen(false)} variant="secondary" />
        </div>
      </Modal>
    </div>
  );
};

export default App;
