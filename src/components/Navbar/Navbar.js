import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../assets/img/logo.svg";
import { Search } from "../";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
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
      {toggleSearch ? <Search className={classes.searchContainerNav} /> : ""}
      <div className={`container`}>
        <div className={classes.navbar}>
          <NavLink to="/" className={classes.navLogo}>
            <img src={logo} className={`img-fluid ${classes.navLogoView}`} />
          </NavLink>
          <div className={classes.navLinks}>
            {/* <div className={classes.navDropdown}>
              <NavLink to="/Home" className={classes.navLink}>
                Home
              </NavLink>
            </div> */}
            <div className={classes.navDropdown}>
              <NavLink to="/" className={classes.navLink}>
                Home
                {/* <FontAwesomeIcon
                  className={classes.arrowDown}
                  icon={faAngleDown}
                /> */}
              </NavLink>
              {/* <div className={classes.navDropdownList}>
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
              </div> */}
            </div>
            <div className={classes.navDropdown}>
              <NavLink to="/menu" className={classes.navLink}>
                Menu
              </NavLink>
            </div>
            <div className={classes.navDropdown}>
              <NavLink to="/about" className={classes.navLink}>
                About
              </NavLink>
            </div>
            <div className={classes.navDropdown}>
              <NavLink to="/contact" className={classes.navLink}>
                Contact Us
              </NavLink>
            </div>
            <div className={classes.navDropdown}>
              <NavLink
                to="/login"
                className={`${classes.navLink} ${classes.navAuth}`}
              >
                Login
              </NavLink>
            </div>
            <div className={classes.navDropdown}>
              <button className={`${classes.navIcon}`}>
                <span className={`icon-cart`}></span>
              </button>
            </div>
            <div className={classes.navDropdown}>
              <button
                onClick={() => setToggleSearch(!toggleSearch)}
                className={`${classes.navIcon}`}
              >
                {toggleSearch ? (
                  <span className={`icon-cancel`}></span>
                ) : (
                  <span className={`icon-search`}></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
