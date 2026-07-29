import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await api.post("/login", {
        username: username.trim(),
        password,
      });

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("username", response.data.username);

      alert("✅ Login Successful!");

      navigate("/");
    } catch (error) {
      console.log("ERROR:", error);
      console.log("RESPONSE:", error.response);

      if (error.response) {
        alert(error.response.data.detail);
      } else {
        alert("Cannot connect to backend.");
      }
    }
  };

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
          background: "#1e293b",
          borderRadius: "12px",
          color: "white",
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={loginUser}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#06b6d4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;