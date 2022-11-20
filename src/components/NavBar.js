import React from "react";
import logo from "../images/Logo.png";
import "../styles/navbar.scss";

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_inner">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>Voxclips</p>
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Use cases</li>
            <li>Contact</li>
            <li>How it works</li>
          </ul>
          <button>Create video</button>
        </div>
      </div>
    </>
  );
};
