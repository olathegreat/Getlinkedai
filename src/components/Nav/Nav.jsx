import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [isScreen768px, setIsScreen768px] = useState(false);

 
  const handleScreenWidthChange = () => {
    if (window.innerWidth >= 769) {
     
      setIsScreen768px(true);
    } else {
      
      setIsScreen768px(false);
    }
  };

 
  useEffect(() => {
    
    handleScreenWidthChange();

   
    window.addEventListener("resize", handleScreenWidthChange);

  
    return () => {
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);

  const navToggleFunction = () => {
    setNavToggle(!navToggle);
  };
  return (
    <nav>
      <div className="nav" style={{rowGap: !isScreen768px && !navToggle && 0}}>
        <div className="large-screen-left">
          <img
            style={{ cursor: "pointer" }}
            src="/images/getlinked.png"
            onClick={() => navigate("/")}
            alt="logo"
          />
        </div>
        <div className="mobile-left">
          <img
            src="/images/getlinked.png"
            onClick={() => navigate("/")}
            alt="logo"
            style={{
              display: location === "/" ? "block" : "none",
              cursor: "pointer",
            }}
          />

          <div
            className="nav-control"
            style={{ display: location === "/" ? "block" : "none" }}
          >
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

          <img
            src="/images/back.png"
            style={{ display: location === "/contact" ? "block" : "none" }}
            alt="back-icon"
            onClick={() => navigate(-1)}
          />

          <h3
            className="register-header"
            style={{ display: location === "/register" ? "block" : "none" }}
          >
            Register
          </h3>
        </div>

        <div
          className={`right ${location === "/contact" && "no-small-display"} ${
            location === "/register" && "no-small-display"
          } `}

      
        >
          <ul style={{display: !isScreen768px && !navToggle && "none"}}>
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
              <Link
                to="/contact"
                className={`${location === "/contact" && "gradient-text"}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/register" style={{display: !isScreen768px && !navToggle && "none"}}>
            <button
              className={`${
                location === "/register" ? "register-button-border" : ""
              }`}
            >
              Register
            </button>
          </Link>
        </div>

        
      </div>
    </nav>
  );
};

export default Nav;
