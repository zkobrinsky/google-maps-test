export default function UserIcon({ text }) {
  return (
    <div
      style={{
        color: "white",
        width: "3vh",
        height: "3vh",
        background: "black",
        padding: "10px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}
