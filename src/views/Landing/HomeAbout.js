import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Landing.module.css";

const HomeAbout = () => {
  return (
    <div className={classes.homeAbout}>
      <div className={`container`}>
        <div className={classes.aboutContent}>
          <div className={classes.aboutView}>
            <img
              src="https://images.pexels.com/photos/4109129/pexels-photo-4109129.jpeg"
              className={`img-fluid`}
            />
          </div>

          <div className={classes.aboutInfo}>
            <div className={`bg-title ${classes.aboutBgTitle}`}>
              Simple Way Of <br />
              Eating Delicious
            </div>
            <div className={`text ${classes.aboutText}`}>
              Kepp Health food readily available when you
              <br /> get hungry, you're more likely to eat the first
              <br /> thing you see on the counter or in the
            </div>
            <div className={`${classes.aboutBtn}`}>
              <NavLink
                className={`main-button ${classes.moreMealsLink}`}
                to={"/"}
              >
                Explore our Story
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeAbout };
