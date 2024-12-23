import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./component/Admin";
import AdminDash from "./component/AdminDash";
import "./App.css";
import UserDash from "./component/UserDash";
import UserLogin from "./component/UserLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/admin-dash" element={<AdminDash />} />
        <Route path="/user-dash" element={<UserDash />} />
        <Route path="/user-login" element={<UserLogin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
