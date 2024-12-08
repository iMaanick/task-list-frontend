import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        setError(data.detail || "Failed to register");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-container__title">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="auth-container__input-container">
          <label htmlFor="email" className="auth-container__label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-container__input"
            required
          />
        </div>
        <div className="auth-container__input-container">
          <label htmlFor="username" className="auth-container__label">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-container__input"
            required
          />
        </div>
        <div className="auth-container__input-container">
          <label htmlFor="password" className="auth-container__label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-container__input"
            required
          />
        </div>
        {error && <p className="auth-container__error-message">{error}</p>}
        <button type="submit" className="auth-container__auth-button">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login" className="auth-container__link">Login</a>
      </p>
    </div>
  );
};

export default Register;
