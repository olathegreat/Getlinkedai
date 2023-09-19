import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navToggleFunction = () => {
    setNavToggle(!navToggle);
  };
  return (
    <nav>
      <div className="nav">
        <div className="large-screen-left">
          <img src="/images/getlinked.png" alt="logo" />
        </div>
        <div className="mobile-left">
          <img src="/images/getlinked.png" alt="logo" />

          <div className="nav-control">
            <img
              style={{ display: !navToggle ? "block" : "none" }}
              onClick={navToggleFunction}
              src="/images/menu.png"
              alt="menu-icon"
            />
            <img
              style={{ display: navToggle ? "block" : "none" }}
              onClick={navToggleFunction}
              src="/images/cancelgroup.png"
              alt="cancel-icon"
            />
          </div>
        </div>

        <div className="right">
          <ul>
            <li>
              <Link to="">Timeline</Link>
            </li>
            <li>
              <Link to="">Overview</Link>
            </li>
            <li>
              <Link to="">FAQs</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>

          <button className="register-button">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
