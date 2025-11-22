import React from "react";
import { FiHome, FiBarChart2, FiUsers, FiSettings, FiBook, FiClipboard } from "react-icons/fi";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">LOGO</h2>

      <ul className="sidebar-menu">
        <li className="active">
          <FiHome className="icon" /> Dashboard
        </li>
        <li>
          <FiUsers className="icon" /> License User
        </li>
        <li>
          <FiClipboard className="icon" /> My templates
        </li>
        <li>
          <FiSettings className="icon" /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
