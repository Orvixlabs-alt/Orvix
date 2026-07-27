import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
        ORVIX
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Your Intelligent AI Workspace
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/login">
          <button
            style={{
              padding: "12px 28px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            style={{
              padding: "12px 28px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;