import React, { Component } from "react";
import classes from "./Landing.module.css";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { HomeSlider } from "./HomeSlider";

class Landing extends Component {
  render() {
    return (
      <div className={`wrapper-container ${classes.wrapperContainer}`}>
        <Navbar />
        <HomeSlider />
        <Footer />
      </div>
    );
  }
}

export { Landing };
