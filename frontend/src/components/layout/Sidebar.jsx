// src/components/layout/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "←" : "→"}
      </button>
      <nav className="sidebar-nav">
        <Link to="/">Inicio</Link>
        <Link to="/iniciar-sesion">Login</Link>
        <Link to="/home">Dashboard</Link>
        <Link to="/Peliculas">Peliculas</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
