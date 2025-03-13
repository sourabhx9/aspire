import React from "react";
import { NavLink } from "react-router-dom";
import "./ToolsHP.css"; // Ensure the styles are correct
import logo from "../../logo.png"; // Logo path
import { FaHome, FaChartBar, FaEnvelope } from "react-icons/fa"; // Icons

const ToolsHP = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        {/* Left Section - Logo & Title */}
        <div className="hleft-section">
          <img src={logo} alt="Logo" className="logo" />
          <span className="htitle">Aspire Tools</span>
        </div>

        {/* Right Section - Navigation & Login/Register */}
        <div className="hright-section">
          {/* Navigation Links */}
          <nav className="hnav-links">
            <NavLink to="/" className="hnav-item">
              <FaHome className="nav-icon" /> Home
            </NavLink>
            <NavLink to="/stats" className="hnav-item">
              <FaChartBar className="nav-icon" /> Stats
            </NavLink>
            <NavLink to="/contact" className="hnav-item">
              <FaEnvelope className="nav-icon" /> Contact Us
            </NavLink>
          </nav>

          {/* Login/Register Button */}
          <NavLink to="/login" className="login-button">
            <FaEnvelope /> Login / Register
          </NavLink>
        </div>
      </header>

      {/* Tools Section */}
      <div className="container">
        <h2 className="title">Useful Tools</h2>
        <p className="subtitle">Enhance productivity with these interactive tools.</p>
        <div className="grid">
          {/* To-Do List Section */}
          <div className="card todo-list">
            <NavLink to="/todo">
              <h3>To-Do List</h3>
              <p>Organize your daily tasks and keep track of your progress.</p>
              <img src={"/assets/todo-list.png"} alt="To-Do List" className="card-image" />
            </NavLink>
          </div>

          {/* Voice Typing Section */}
          <div className="card voice-typing">
            <NavLink to="/voicetyping">
              <h3>Voice Typing</h3>
              <p>Convert your speech into text effortlessly for better accessibility.</p>
              <img src={"/assets/voice-typing.png"} alt="Voice Typing" className="card-image" />
            </NavLink>
          </div>

          <div className="card soothing-sound">
            <NavLink to="/soothingsound">
              <h3>Soothing Sound</h3>
              <p>Hear relaxing sounds.</p>
              <img src={"/assets/soothing-sound.png"} alt="Voice Typing" className="card-image" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsHP;
