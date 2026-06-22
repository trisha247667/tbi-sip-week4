/**
 * Props:
 * placeholder - placeholder text
 */
function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: "10px",
        width: "250px",
        borderRadius: "8px",
        border: "1px solid #ccc",
      }}
    />
  );
}

export default Input;