import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { MealItem } from "../../components";
import classes from "./Landing.module.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Sandwich = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    const bodyEl = document.body;
    if (language == "ar") {
      bodyEl.classList.add("body-rtl");
    } else {
      bodyEl.classList.remove("body-rtl");
    }
  };
  if (localStorage.getItem("i18nextLng")) {
    const bodyEl = document.body;
    if (localStorage.getItem("i18nextLng") == "ar") {
      bodyEl.classList.add("body-rtl");
    } else {
      bodyEl.classList.remove("body-rtl");
    }
  }
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
  return (
    <div className={classes.HomeSliderSandwich}>
      <div className={`container`}>
        <Swiper
          spaceBetween={27}
          slidesPerView={4}
          speed={1000}
          pagination={false}
          autoplay={{ delay: 4500 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={classes.swiperContainerSandwich}
        >
          {rows.map((row, index) => {
            return (
              <SwiperSlide key={index}>
                <MealItem
                  image={row.image}
                  title={row.title}
                  title_ar={row.title_ar}
                  price={row.price}
                  description={row.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={classes.moreMeals}>
          <NavLink
            className={`main-button ${classes.moreMealsLink}`}
            to={"/menu"}
          >
            {t("see-more-btn")}
          </NavLink>
          {/* {t("welcome")} */}
          {/* <br />
          {i18n.language == "ar" ? (
            <button onClick={() => changeLanguage("en")}>EN</button>
          ) : (
            <button onClick={() => changeLanguage("ar")}>AR</button>
          )}
          <br />
          {i18n.language == "ar" ? "عماد" : "emad"} */}
        </div>
      </div>
    </div>
  );
};

export { Sandwich };
