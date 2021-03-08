import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.searchContainer}>
      <span className={`icon-search ${classes.icon}`}></span>
      <input type="text" placeholder="Search" className={classes.input} />
    </div>
  );
};

export { Search };
