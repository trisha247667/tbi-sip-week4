/**
 * Props:
 * message - toast text
 */
function Toast({ message }) {
  return (
    <div
      style={{
        padding: "10px",
        background: "#eee",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;