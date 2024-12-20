import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./UserLogin.css";
const UserLogin = () => {
  const [focus, setFocus] = useState("");
  const [credentials] = useState({ uname: "user", pass: "user123" });
  const [input, setInput] = useState({ uname: "", pass: "" });
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
    if (input.uname === credentials.uname && input.pass === credentials.pass) {
      setError("");
      navigate("/user-dash");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <div class="container">
      <form class="uform" onSubmit={handleSubmit}>
        <div class="userlogin"><h3 id="ul">User Login</h3></div>
        <label htmlFor="uname">Username</label>
        <input
          type="text"
          id="uname"
          placeholder="Username"
          value={input.username}
          onChange={handleChange}
          onFocus={() => handleFocus("uname")}
          onBlur={handleBlur}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          onFocus={() => handleFocus("pass")}
          onBlur={handleBlur}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="ear-left"></div>
      <div className="ear-right"></div>
      <div className="panda-face2">
        <div className="blush-lf"></div>
        <div className="blush-rg"></div>
        <div className="eye-lf">
          <div
            className="eyeball-lf"
            style={{
              left: focus === "uname" ? "0.75em" : "0.6em",
              top: focus === "uname" ? "1.12em" : "0.6em",
            }}
          ></div>
        </div>
        <div className="eye-rg">
          <div
            className="eyeball-rg"
            style={{
              right: focus === "uname" ? "0.75em" : "0.6em",
              top: focus === "uname" ? "1.12em" : "0.6em",
            }}
          ></div>
        </div>
        <div className="nose1"></div>
        <div className="mouth1"></div>
      </div>
      <div
        className="hand-lf"
        style={{
          height: focus === "pass" ? "6.56em" : "2.81em",
          top: focus === "pass" ? "3.87em" : "8.4em",
          left: focus === "pass" ? "11.75em" : "7.5em",
          transform: focus === "pass" ? "rotate(-155deg)" : "rotate(0deg)",
        }}
      ></div>
      <div
        className="hand-rg"
        style={{
          height: focus === "pass" ? "6.56em" : "2.81em",
          top: focus === "pass" ? "3.87em" : "8.4em",
          right: focus === "pass" ? "11.75em" : "7.5em",
          transform: focus === "pass" ? "rotate(155deg)" : "rotate(0deg)",
        }}
      ></div>
      <div className="paw-lf"></div>
      <div className="paw-rg"></div>
    </div>
    </div>
  );
};
export default UserLogin;