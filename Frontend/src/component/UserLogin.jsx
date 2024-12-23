import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";
import axios from "axios";

const UserLogin = () => {
  const [focus, setFocus] = useState("");
  const [input, setInput] = useState({ email: "", password: "" });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.105:8080/api/login", input, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 200) {
        const message = response.data; // Assuming the API returns a success message in the response body
        setError("");
        alert(message); // Optionally show a success message
        navigate("/user-dash"); // Navigate to dashboard
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again.");
      console.error(error);
    }
  };
  

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <h3 style={styles.navbarBrand}>CodeBegun</h3>
          <h3 className="wlcm">Welcome to User's Page!</h3>
          <ul style={styles.navbarMenu}>
            <li><a href="/" style={styles.navbarLink}>Home</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <form className="uform" onSubmit={handleSubmit}>
          <div className="userlogin">
            <h3 id="ul">User Login</h3>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            required
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
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

const styles = {
  navbar: {
    backgroundColor: "#343a40",
    padding: "25px 20px",
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarBrand: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
  },
  navbarMenu: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navbarLink: {
    color: "#fff",
    padding: "0 15px",
    textDecoration: "none",
    fontSize: "16px",
  },
};
