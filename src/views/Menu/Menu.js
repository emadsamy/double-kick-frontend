import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import classes from "./Menu.module.css";
import { Helmet } from "react-helmet";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { MealItem } from "../../components";

const Menu = () => {
  const { t, i18n } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [prices, setPrices] = useState([
    // 72
    {
      id: 1,
      price: 15,
    },
    {
      id: 2,
      price: 23,
    },
    {
      id: 3,
      price: 34,
    },
    {
      id: 4,
      price: 9,
    },
  ]);
  const [rows, setRows] = useState([
    {
      id: 1,
      title: "Sandwich 1",
      title_ar: "ساندوتش 1",
      image:
        "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603901.jpg&fm=jpg",
      price: 100,
      description:
        " to customers. ... restaurant guide that has reviews on the restaurants as experienced by the public and provides information on locations and contact",
    },
    {
      id: 2,
      title: "Sandwich 2",
      title_ar: "ساندوتش 1",
      image:
        "https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603898.jpg&fm=jpg",
      price: 200,
      description:
        " to customers. ... restaurant guide that has reviews on the restaurants as experienced by the public and provides information on locations and contact",
    },
    {
      id: 3,
      title: "Sandwich 3",
      title_ar: "ساندوتش 1",
      image:
        "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?cs=srgb&dl=pexels-erin-wang-1647163.jpg&fm=jpg",
      price: 300,
      description:
        " to customers. ... restaurant guide that has reviews on the restaurants as experienced by the public and provides information on locations and contact",
    },
    {
      id: 4,
      title: "Sandwich 4",
      title_ar: "ساندوتش 1",
      image:
        "https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603898.jpg&fm=jpg",
      price: 400,
      description:
        " to customers. ... restaurant guide that has reviews on the restaurants as experienced by the public and provides information on locations and contact",
    },
    {
      id: 1,
      title: "Sandwich 1",
      title_ar: "ساندوتش 1",
      image:
        "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603901.jpg&fm=jpg",
      price: 100,
      description:
        " to customers. ... restaurant guide that has reviews on the restaurants as experienced by the public and provides information on locations and contact",
    },
    {
      id: 2,
      title: "Sandwich 2",
      title_ar: "ساندوتش 1",
      image:
        "https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603898.jpg&fm=jpg",
      price: 200,
      description:
        " to customers. ... restaurant guide that has reviews on the restaurants as experienced by the public and provides information on locations and contact",
    },
  ]);
  const handlerCounter = () => {
    var totally = 0;
    prices.map((item, index) => {
      totally += item.price;
      setTotalPrice(totally);
    });
    console.log("Total Price Is: " + totalPrice);
  };

  useEffect(() => {
    handlerCounter();
  });

  const pushObjectHandler = (idx, pricex) => {
    prices.push({ id: idx, price: pricex });
    handlerCounter();
  };

  return (
    <div className={`wrapper-container ${classes.wrapperContainer}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu</title>
        <body className="dynamic-class-for-body-on-this-view" />
      </Helmet>
      <Navbar />
      <div className={classes.header}>
        <div className={`container`}>
          <div className={classes.headerContent}>
            <div className={classes.headerData}>
              <div>
                <div className={classes.headerTitle}>Chicken Wings</div>
                <div className={classes.headerSub}>
                  special food for this week
                </div>
                <div className={classes.headerDescription}>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book
                </div>
                <button
                  className={`main-button ${classes.moreMealsLink}`}
                  onClick={() => pushObjectHandler(5, 10)}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className={classes.headerView}>
              <img
                src={
                  "https://image.freepik.com/free-photo/fried-chicken-wings-with-french-fries-tomato_74190-6311.jpg"
                }
                className={`img-fluid`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.menuContainer}>
        <div className={`container`}>
          <div className={classes.menuTitle}>
            Discover Best Dishes,
            <br /> Meals, Sandwich...
          </div>
          <div className={classes.menuGrid}>
            {rows.map((row, index) => {
              return (
                <MealItem
                  key={index}
                  className={classes.mealItem}
                  image={row.image}
                  title={i18n.language == "ar" ? row.title_ar : row.title}
                  price={row.price}
                  description={row.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Menu };
