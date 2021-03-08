import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./UpperBar.module.css";
import { Search, Avatar } from "../index";
import { Dropdown } from "react-bootstrap";

const UpperBar = () => {
  return (
    <div className={classes.upperBar}>
      <div className={classes.searchBar}>
        <Search />
      </div>
      <div className={classes.toolsBar}>
        <div className={classes.notification}>
          <button className={classes.ncBtn}>
            <span className={`icon-notification ${classes.ncIcon}`}></span>
          </button>
        </div>
        <div className={classes.avatar}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Avatar />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <NavLink class="dropdown-item" to="/profile">
                Profile
              </NavLink>
              <NavLink class="dropdown-item" to="/settings">
                Settings
              </NavLink>
              <NavLink class="dropdown-item" to="/logout">
                Logout
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export { UpperBar };
