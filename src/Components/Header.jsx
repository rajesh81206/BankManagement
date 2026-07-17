import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>🏦 Bank Management</h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/service" onClick={closeMenu}>Service</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/login" onClick={closeMenu} className="login-btn">Login</Link>
      </nav>
    </header>
  );
}

export default Header;