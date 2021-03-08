import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Restaurant.module.css";

const Restaurant = (props) => {
  return (
    <div className={classes.restaurantCard}>
      <div className={classes.header}>
        <div
          className={classes.cover}
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/1600130/pexels-photo-1600130.jpeg?cs=srgb&dl=pexels-hoang-loc-1600130.jpg&fm=jpg"})`,
          }}
        ></div>
        <div className={classes.logo} style={{ border: `4px solid #666` }}>
          {/* <img src={} className={`img-fluid ${classes.brandImg}`} /> */}
        </div>
      </div>
      <div className={classes.body}>
        <div className={`${classes.title}`}>Macdonald</div>
        <div className={`${classes.description}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </div>
      <div className={classes.footer}>
        <Link to={`/`} className={classes.profileLink}>
          See Profile
        </Link>
      </div>
    </div>
  );
};

export { Restaurant };
