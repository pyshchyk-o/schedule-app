import React from "react";

import "./nav-bar.css";

const NavBar = () => (
  <div className="nav-bar-container">
    <div className="nav-button-container">
      <i className="pi pi-user" alt="user-profile" />
    </div>

    <div className="nav-button-container">
      <i className="pi pi-search" alt="search"/>
    </div>
  </div>
);

export default NavBar;
