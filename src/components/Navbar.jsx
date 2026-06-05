import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const navButtonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1200px",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 30px",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid #e5e7eb",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "60px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={navButtonStyle}
        >
          HOME
        </button>

        <button
          onClick={() => navigate("/about")}
          style={navButtonStyle}
        >
          ABOUT
        </button>
      </div>
    </nav>
  );
}