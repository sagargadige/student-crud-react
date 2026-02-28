import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Student Data", path: "/stddata" },
  ];

  return (
    <nav className="navbar app-navbar">
      <div className="container">
        <button type="button" className="app-brand" onClick={() => navigate("/")}>
          Student Management
        </button>

        <div className="app-nav-links">
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              className={`app-nav-link ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
