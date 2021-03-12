import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import classes from "./ViewProduct.module.css";
import { Helmet } from "react-helmet";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ViewProduct = (props) => {
  const { t, i18n } = useTranslation();
  const [mainView, setMainView] = useState("");
  const [views, setViews] = useState([
    {
      id: 1,
      image:
        "https://image.freepik.com/free-photo/grilles-chicken-steak-with-teriyaki-sauce_1339-6778.jpg",
    },
    {
      id: 2,
      image:
        "https://image.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg",
    },
    {
      id: 3,
      image:
        "https://image.freepik.com/free-photo/flat-lay-arrangement-nourishing-meal_23-2148484629.jpg",
    },
    {
      id: 4,
      image:
        "https://image.freepik.com/free-photo/grilles-chicken-steak-with-teriyaki-sauce_1339-6778.jpg",
    },
    {
      id: 5,
      image:
        "https://image.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg",
    },
    {
      id: 6,
      image:
        "https://image.freepik.com/free-photo/flat-lay-arrangement-nourishing-meal_23-2148484629.jpg",
    },
  ]);
  const viewHandler = (img) => {
    setMainView(img);
  };
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className={`wrapper-container ${classes.wrapperContainer}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {i18n.language == "ar"
            ? props.location.state.title_ar
            : props.location.state.title}
        </title>
        <body className="dynamic-class-for-body-on-this-view" />
      </Helmet>
      <Navbar />
      <div className={classes.viewProduct}>
        <div className={`container`}>
          <div className={classes.viewProductContent}>
            <div className={classes.view}>
              <div className={classes.mainView}>
                <img
                  src={mainView == "" ? views[0].image : mainView}
                  className={`img-fluid`}
                />
              </div>
              <div className={classes.toggleView}>
                <Swiper
                  spaceBetween={27}
                  slidesPerView={4}
                  speed={1000}
                  pagination={false}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  autoplay={{ delay: 4500 }}
                  activeSlideKey={1}
                  onSlideChange={(swiper) =>
                    console.log("slide change", swiper)
                  }
                  onSwiper={(swiper) => console.log("this is swiper", swiper)}
                >
                  {views.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img
                          src={item.image}
                          onClick={() => viewHandler(item.image)}
                          className={`img-fluid ${classes.toggleImgSlide}`}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className={classes.arrows}>
                  <button className={`prev`}>
                    <span
                      className={`icon-chevron-left ${classes.iconChevron}`}
                    ></span>
                  </button>
                  <button className={`next`}>
                    <span
                      className={`icon-chevron-right ${classes.iconChevron}`}
                    ></span>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className={classes.data}></div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ViewProduct };
