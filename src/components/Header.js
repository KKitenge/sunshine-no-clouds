import React from "react";
import "./assets/css/style.css";
// import Navbar from "./Navbar";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav nav-tabs" id="navbar">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#bio"
            onClick={() => handlePageChange("Bio")}
            className={currentPage === "Bio" ? "nav-link active" : "nav-link"}
          >
            Bio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
