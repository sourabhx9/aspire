import React from "react";
import { NavLink } from "react-router-dom";
import "./FunGames.css"; // Ensure the styles are correct
import logo from "../../logo.png"; // Logo path
import { FaGamepad, FaPuzzlePiece, FaPalette } from "react-icons/fa"; // Icons

const FunGames = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        {/* Left Section - Logo & Title */}
        <div className="hleft-section">
          <img src={logo} alt="Logo" className="logo" />
          <span className="htitle">Aspire Fun Games</span>
        </div>

        {/* Right Section - Navigation & Login/Register */}
        <div className="hright-section">
          {/* Navigation Links */}
          <nav className="hnav-links">
            <NavLink to="/" className="hnav-item">
              <FaGamepad className="nav-icon" /> Home
            </NavLink>
            <NavLink to="/games" className="hnav-item">
              <FaPuzzlePiece className="nav-icon" /> Games
            </NavLink>
            <NavLink to="/contact" className="hnav-item">
              <FaPalette className="nav-icon" /> Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Games Section */}
      <div className="container">
        <h2 className="title">Fun Games</h2>
        <p className="subtitle">Enjoy a variety of engaging and educational games.</p>
        <div className="grid">
          {/* Match Colors Game */}
          <div className="card match-colors">
            <NavLink to="/matchcolors">
              <h3>Match Colors</h3>
              <p>Enhance color recognition skills by matching colors.</p>
              <img src={"/assets/match-colors.png"} alt="Match Colors" className="card-image" />
            </NavLink>
          </div>

          {/* Rhyming Words Game */}
          <div className="card rhyming-words">
            <NavLink to="/rhymingwords">
              <h3>Rhyming Words</h3>
              <p>Boost language skills by finding words that rhyme.</p>
              <img src={"/assets/rhyming-words.png"} alt="Rhyming Words" className="card-image" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunGames;
