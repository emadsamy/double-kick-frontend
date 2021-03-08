import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import { Sidebar, UpperBar } from "../../components";

const Publishers = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked times`;
    console.log(props);
  });
  return (
    <div className={classes.publiContainer}>
      <div className={`title`}>Search about you want..</div>
      <div>{}</div>
    </div>
  );
};

export { Publishers };
