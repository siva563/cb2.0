import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./component/Admin";
import AdminDash from "./component/AdminDash";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/admin-dash" element={<AdminDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
