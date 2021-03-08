import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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

const HomeSlider = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      title: "Sandwich 1",
      image:
        "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603901.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "Sandwich 2",
      image:
        "https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?cs=srgb&dl=pexels-rajesh-tp-1603898.jpg&fm=jpg",
    },
    {
      id: 3,
      title: "Sandwich 3",
      image:
        "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?cs=srgb&dl=pexels-erin-wang-1647163.jpg&fm=jpg",
    },
  ]);
  return (
    <div className={classes.HomeSliderContainer}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        speed={1000}
        pagination={{ el: ".swiper-pagination-home", clickable: true }}
        autoplay={{ delay: 4500 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={classes.swiperContainerParent}
      >
        {rows.map((row, index) => {
          return (
            <SwiperSlide key={index}>
              <NavLink
                to="/"
                className={classes.swiperSlideLink}
                style={{ backgroundImage: `url(${row.image})` }}
              ></NavLink>
            </SwiperSlide>
          );
        })}
        <div
          className={`swiper-pagination-home ${classes.paginationContainer}`}
        ></div>
      </Swiper>
    </div>
  );
};

export { HomeSlider };
