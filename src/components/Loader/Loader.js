import React from "react";
import loader from "../../assets/icon/loader.svg";

const Loader = (props) => {
  return <img src={loader} className={`img-fluid ${props.className}`} />;
};

export { Loader };
