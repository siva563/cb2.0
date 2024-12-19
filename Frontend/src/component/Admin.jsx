import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Admin.css";

const Admin = () => {
  const [focus, setFocus] = useState("");
  const [credentials] = useState({ username: "admin", password: "admin123" });
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFocus = (inputType) => {
    setFocus(inputType);
  };

  const handleBlur = () => {
    setFocus("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput({ ...input, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username === credentials.username && input.password === credentials.password) {
      setError("");
      navigate("/admin-dash");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark"></nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={input.username}
          onChange={handleChange}
          onFocus={() => handleFocus("username")}
          onBlur={handleBlur}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="ear-l"></div>
      <div className="ear-r"></div>
      <div className="panda-face">
        <div className="blush-l"></div>
        <div className="blush-r"></div>
        <div className="eye-l">
          <div
            className="eyeball-l"
            style={{
              left: focus === "username" ? "0.75em" : "0.6em",
              top: focus === "username" ? "1.12em" : "0.6em",
            }}
          ></div>
        </div>
        <div className="eye-r">
          <div
            className="eyeball-r"
            style={{
              right: focus === "username" ? "0.75em" : "0.6em",
              top: focus === "username" ? "1.12em" : "0.6em",
            }}
          ></div>
        </div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
      <div
        className="hand-l"
        style={{
          height: focus === "password" ? "6.56em" : "2.81em",
          top: focus === "password" ? "3.87em" : "8.4em",
          left: focus === "password" ? "11.75em" : "7.5em",
          transform: focus === "password" ? "rotate(-155deg)" : "rotate(0deg)",
        }}
      ></div>
      <div
        className="hand-r"
        style={{
          height: focus === "password" ? "6.56em" : "2.81em",
          top: focus === "password" ? "3.87em" : "8.4em",
          right: focus === "password" ? "11.75em" : "7.5em",
          transform: focus === "password" ? "rotate(155deg)" : "rotate(0deg)",
        }}
      ></div>
      <div className="paw-l"></div>
      <div className="paw-r"></div>
    </div>
  );
};

export default Admin;
