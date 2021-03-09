import React, { Component } from "react";
import classes from "./Landing.module.css";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { HomeSlider } from "./HomeSlider";
import { Sandwich } from "./Sandwich";
import { HomeAbout } from "./HomeAbout";
import { Benefits } from "./Benefits";

class Landing extends Component {
  render() {
    return (
      <div className={`wrapper-container ${classes.wrapperContainer}`}>
        <Navbar />
        <HomeSlider />
        <Sandwich />
        <HomeAbout />
        <Benefits />
        <Footer />
      </div>
    );
  }
}

export { Landing };
