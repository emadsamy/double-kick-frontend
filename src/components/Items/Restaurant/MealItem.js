import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.slideMeal}>
      <button className={classes.toggleFavBtn}>
        <div className={classes.toggleFavDiv}>
          <span
            className={`icon-full-heart ${classes.emptyHeart} ${classes.icon}`}
          ></span>
          <span className={classes.toggleFavBtnText}>{t("add-to-cart")}</span>
        </div>
      </button>
      <NavLink to="/" className={classes.slideLinkMeal}>
        <div className={classes.mealHeader}>
          <img
            src={props.image}
            className={`img-fluid ${classes.mealImgView}`}
            alt={props.title}
          />
        </div>
        <div className={classes.mealBody}>
          <div className={`bg-title ${classes.mealTitle}`}>{props.title}</div>
          <div className={`bg-title ${classes.mealPrice}`}>
            {t("price-title")}
            <span>
              {props.price} {t("currency")}
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export { MealItem };
