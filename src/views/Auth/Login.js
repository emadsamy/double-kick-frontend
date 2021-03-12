import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Auth.module.css";
import { AuthHeader } from "./AuthHeader";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div className={classes.authContainer}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://double-kick.com/login" />
        <body className="dynamic-class-for-body-on-this-view" />
      </Helmet>
      <div
        className={classes.content}
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1551224160-324dd747bfb1"})`,
        }}
      >
        <div className={classes.authForm}>
          <div className={classes.data}>
            <AuthHeader />
            <div className={classes.authDataBg}>
              {/* <div className={classes.logo}>Logo Here</div> */}
              <div className={`bg-title ${classes.bgTitle}`}>Log in.</div>
              <div className={`text mb-5 ${classes.text}`}>
                Log in with your data that you entered during <br /> your
                registration
              </div>
              <form className={classes.form}>
                <div className={`form-data-group mb-3`}>
                  <label className={`form-data-label`}>Number Phone</label>
                  <div className={`form-data-input`}>
                    <input type="tel" placeholder={`01234567890`} />
                  </div>
                </div>
                <div className={`form-data-group mb-3`}>
                  <label className={`form-data-label`}>Password</label>
                  <div className={`form-data-input`}>
                    <input
                      type="password"
                      placeholder={`at least 6 characters`}
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

                <div className={`form-data-group mb-3`}>
                  <button className={`main-button`}>Login</button>
                </div>
                <div className={classes.toggleAuthLinks}>
                  Don't have an account ?
                  <Link className={classes.toggleAuthBtn} to="/register">
                    Register Now
                  </Link>
                </div>
              </form>
            </div>
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
