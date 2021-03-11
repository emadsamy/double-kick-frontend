import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Auth.module.css";
import logo from "../../assets/img/logo.svg";

const AuthHeader = () => {
  return (
    <div className={`text-center ${classes.authLogo}`}>
      <NavLink to="/">
        <img src={logo} className={`img-fluid`} />
      </NavLink>
    </div>
  );
};

export { AuthHeader };
