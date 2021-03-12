import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`${classes.slideMeal} ${props.className}`}>
      <button className={classes.toggleFavBtn}>
        <div className={classes.toggleFavDiv}>
          <span
            className={`icon-full-heart ${classes.emptyHeart} ${classes.icon}`}
          ></span>
          <span className={classes.toggleFavBtnText}>{t("add-to-cart")}</span>
        </div>
      </button>
      <div className={classes.slideLinkMeal}>
        <div className={classes.mealHeader}>
          <img
            src={props.image}
            className={`img-fluid ${classes.mealImgView}`}
            alt={props.title}
          />
        </div>
        <div className={classes.mealBody}>
          <div className={`bg-title ${classes.mealTitle}`}>
            {i18n.language == "ar" ? props.title_ar : props.title}
          </div>
          <div
            className={`text ${classes.mealDescription}`}
            title={props.description}
          >
            {props.description.length > 80
              ? props.description.substr(0, 80)
              : props.description}
          </div>
          <div className={`bg-title mb-3 ${classes.mealPrice}`}>
            {t("price-title")}
            <span>
              {props.price} {t("currency")}
            </span>
          </div>
          <div className={classes.buyer}>
            <NavLink
              to={{
                pathname: "/product/1",
                state: {
                  title: props.title,
                  title_ar: props.title_ar,
                },
              }}
              className={`main-button ${classes.buyNow}`}
            >
              Add To Cart
            </NavLink>
            {/* <button className={classes.plusBtn}>
              <span>+</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MealItem };
