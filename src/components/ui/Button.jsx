/**
 * Props:
 * text - button label
 */
function Button({ text }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#333",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
