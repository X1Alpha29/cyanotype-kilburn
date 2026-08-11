"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const resetScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  resetScroll();

  const frame = requestAnimationFrame(() => {
    resetScroll();
  });

  return () => {
    cancelAnimationFrame(frame);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  };
}, []);
  

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    const element = document.querySelector(target);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <a
          href="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          CYANOTYPE
        </a>

        <div
          className={`navbar-links ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <a
            href="#work"
            onClick={(event) =>
              handleNavigation(event, "#work")
            }
          >
            Work
          </a>

          <a
            href="#events"
            onClick={(event) =>
              handleNavigation(event, "#events")
            }
          >
            Events
          </a>

          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}