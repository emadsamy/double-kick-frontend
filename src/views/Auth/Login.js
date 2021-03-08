import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Auth.module.css";

const Login = () => {
  return (
    <div className={classes.authContainer}>
      <div className={classes.content}>
        <div className={classes.authForm}>
          <div className={classes.data}>
            {/* <div className={classes.logo}>Logo Here</div> */}
            <div className={`bg-title ${classes.bgTitle}`}>Log in.</div>
            <div className={`text mb-5 ${classes.text}`}>
              Log in with your data that you entered during <br /> your
              registration
            </div>
            <form className={classes.form}>
              <div className={`form-data-group`}>
                <label className={`form-data-label`}>Your Email</label>
                <div className={`form-data-input`}>
                  <input type="email" placeholder={`name@domain.com`} />
                </div>
              </div>
              <div className={`form-data-group mb-3`}>
                <label className={`form-data-label`}>Password</label>
                <div className={`form-data-input`}>
                  <input
                    type="password"
                    placeholder={`at least 8 characters`}
                  />
                </div>
              </div>

              <div className={`form-data-group`}>
                <div className={`form-checkbox-box`}>
                  <input
                    className={`form-input-checkbox`}
                    type="checkbox"
                    name="remember_me"
                    id="rememberMe"
                  />
                  <label for="rememberMe" className={`form-label-checkbox`}>
                    Remember Me
                  </label>
                </div>
              </div>

              <div className={`form-data-group mb-1`}>
                <button className={`button-pri`}>Login</button>
              </div>
              <div className={classes.toggleAuthLinks}>
                Don't have an account ? <Link to="/register">Register Now</Link>
              </div>
            </form>
          </div>
        </div>
        <div
          className={classes.authBgColor}
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/1216345/pexels-photo-1216345.jpeg?cs=srgb&dl=pexels-madison-inouye-1216345.jpg&fm=jpg"})`,
          }}
        >
          <div className={`overlay`}></div>
        </div>
      </div>
    </div>
  );
};

export { Login };
