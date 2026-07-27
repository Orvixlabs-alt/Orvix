import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          borderRadius: "15px",
          background: "#1e293b",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#06b6d4",
            color: "white",
            fontSize: "16px",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#22d3ee" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;