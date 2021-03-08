import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navs, setNavs] = useState([
    {
      id: 1,
      title: "restaurants",
    },
    {
      id: 2,
      title: "coffees",
    },
    {
      id: 3,
      title: "hotels",
    },
  ]);
  return (
    <nav id="mainNavbar" className={classes.nav}>
      <div className={`container`}>
        <div className={classes.navbar}>
          <NavLink to="/" className={classes.navLogo}>
            Logo Here
          </NavLink>
          <div className={classes.navLinks}>
            {/* <div className={classes.navDropdown}>
              <NavLink to="/Home" className={classes.navLink}>
                Home
              </NavLink>
            </div> */}
            <div className={classes.navDropdown}>
              <NavLink to="/home" className={classes.navLink}>
                Places
                <FontAwesomeIcon
                  className={classes.arrowDown}
                  icon={faAngleDown}
                />
              </NavLink>
              <div className={classes.navDropdownList}>
                {navs.map((nav, index) => {
                  return (
                    <NavLink
                      key={index}
                      to="/"
                      className={classes.dropdownLink}
                    >
                      {nav.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className={classes.navDropdown}>
              <NavLink to="/" className={classes.navLink}>
                About
              </NavLink>
            </div>
            <div className={classes.navDropdown}>
              <NavLink to="/" className={classes.navLink}>
                Contact Us
              </NavLink>
            </div>
            <div className={classes.navDropdown}>
              <NavLink to="/login" className={classes.navLink}>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
