import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [rows, setRows] = useState([
    {
      id: 1,
      title: "Brands",
      icon: "icon-shop",
      redirect: "/home",
    },
    {
      id: 2,
      title: "Favourites",
      icon: "icon-playlist",
      redirect: "/test",
    },
  ]);
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarContent}>
        <div className={classes.sidebarLogo}>Logo Here</div>
        <div className={classes.links}>
          {rows.map((row) => {
            return (
              <NavLink
                key={row.id}
                to={row.redirect}
                className={`${classes.link}`}
              >
                <div className={`${row.icon} ${classes.icon}`}></div>
                <div className={classes.title}>{row.title}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
