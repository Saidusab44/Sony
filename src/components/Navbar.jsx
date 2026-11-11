import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a href="#/" className="logo">
        SONY<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#/" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#/404" onClick={() => setMenuOpen(false)}>
          About Us
        </a>

        <a href="#/404" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="#/404" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>

        <a href="#/404" className="login-btn"
          onClick={() => setMenuOpen(false)}>
          Login
        </a>

        <a href="#/404" className="register-btn"
          onClick={() => setMenuOpen(false)}>
          Register
        </a>

      </div>

    </nav>
  );
}

export default Navbar;