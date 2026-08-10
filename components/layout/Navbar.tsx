"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          CYANOTYPE
        </a>

        <div className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work">Work</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}