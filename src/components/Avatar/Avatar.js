import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Avatar.module.css";
import AvatarImage from "../../assets/img/avatar.png";

const Avatar = () => {
  return <img src={AvatarImage} alt={`Full Name`} className={classes.avatar} />;
};

export { Avatar };
