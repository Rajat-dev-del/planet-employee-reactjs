import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { GrLogout } from "react-icons/gr";
import { BsArrowLeft } from "react-icons/bs";

function Sidebar() {
  
  function closemenu() {
    document.getElementById("sidebar-menu").classList.toggle("open");
    document.body.classList.remove('body-lock');
  }

  return (
    <div className="side-menubar" id="sidebar-menu">
      <div className="back-btn" onClick={closemenu}>
        <span>
          <BsArrowLeft />
        </span>
      </div>
      <div className="user-details">
        <h5>John Lee</h5>
        <p className="user-id">Planetemploy ID : JS/01</p>
        <span className="user-email">John_lee@gmail.com</span>
      </div>
      <div className="sidebar-list">
        <ul>
          <li>
            <div className="sidebar-icon">
              <Link to="/">
                <FaUser />
              </Link>
            </div>
            <div className="sidebar-listname">
              <Link to="/">Personal</Link>
            </div>
          </li>
          <li>
            <div className="sidebar-icon">
              <Link to="/">
                <GrNotes />
              </Link>
            </div>
            <div className="sidebar-listname">
              <Link to="/CurriculamVitae">Curriculum Vitae</Link>
            </div>
          </li>
          <li>
            <div className="sidebar-icon">
              <Link to="/">
                <GoGraph />
              </Link>
            </div>
            <div className="sidebar-listname">
              <Link to="/">Static</Link>
            </div>
          </li>
          <li>
            <div className="sidebar-icon">
              <Link to="/">
                <GrLogout />
              </Link>
            </div>
            <div className="sidebar-listname">
              <Link to="/">Logout</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
