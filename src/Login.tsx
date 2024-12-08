import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/jwt/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username,
          password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        navigate("/");
      } else {
        const data = await response.json();
        setError(data.detail || "Failed to log in");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login__input-container">
          <label htmlFor="username" className="login__label">Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login__input"
            required
          />
        </div>
        <div className="login__input-container">
          <label htmlFor="password" className="login__label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
            required
          />
        </div>
        {error && <p className="login__error-message">{error}</p>}
        <button type="submit" className="login__auth-button">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register" className="login__link">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
