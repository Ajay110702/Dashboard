import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMailOutline } from 'react-icons/io5';
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <header className="topbar">
      
      <h2 className="topbar-title">Welcome, Ajay</h2>

      <div className="topbar-right">

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search here.." />
        </div>

        <button className="icon-btn">
          <IoMailOutline size={15} />
        </button>

        <div className="profile-circle">
          AR
        </div>
      </div>
    </header>
  );
};

export default Topbar;
