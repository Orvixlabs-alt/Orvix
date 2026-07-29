import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>🚀 ORVIX Dashboard</h1>

        <button
          onClick={logout}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <hr
        style={{
          margin: "25px 0",
          borderColor: "#334155",
        }}
      />

      <h2>Welcome, {username}! 👋</h2>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "15px",
          fontSize: "18px",
        }}
      >
        Authentication completed successfully.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          background: "#1e293b",
          borderRadius: "12px",
        }}
      >
        <h3>🤖 ORVIX AI</h3>

        <p style={{ color: "#94a3b8" }}>
          Chat interface coming in the next step...
        </p>
      </div>
    </div>
  );
}

export default Home;