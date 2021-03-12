import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Landing.module.css";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { HomeSlider } from "./HomeSlider";
import { Sandwich } from "./Sandwich";
import { HomeAbout } from "./HomeAbout";
import { Benefits } from "./Benefits";
import { NavbarScroll } from "../../helpers";
import { Helmet } from "react-helmet";

function Landing() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(11);
  NavbarScroll(data);

  return (
    <div className={`wrapper-container ${classes.wrapperContainer}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("site-title")}</title>
        <body className="dynamic-class-for-body-on-this-view" />
      </Helmet>
      <Navbar />
      <HomeSlider />
      <Sandwich />
      <HomeAbout />
      <Benefits />
      <Footer />
    </div>
  );
}

export { Landing };
