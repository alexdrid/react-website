import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNavigation } from "react-icons/md";
import "./Navbar.css";

export const Navbar = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        <MdNavigation className="logo-icon" />
        Navbar
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {isClicked ? <FaTimes /> : <FaBars />}
      </div>
      <div className={isClicked ? "menu-container active" : "menu-container"}>
        <Link to="/home" className="menu-item" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="menu-item" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" className="menu-item" onClick={closeMenu}>
          Services
        </Link>
      </div>
    </nav>
  );
};
