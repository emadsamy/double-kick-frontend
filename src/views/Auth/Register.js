import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Auth.module.css";

const Register = () => {
  return (
    <div className={classes.authContainer}>
      <div className={classes.content}>
        <div className={classes.authForm}>
          <div className={classes.data}>
            {/* <div className={classes.logo}>Logo Here</div> */}
            <div className={`bg-title ${classes.bgTitle}`}>Register.</div>
            <div className={`text mb-5 ${classes.text}`}>
              Register with your data that you entered during <br /> your
              registration
            </div>

            <form className={classes.form}>
              <div className={classes.toggleUsers}>
                <div className={classes.memberType}>
                  <input
                    type="radio"
                    name="member_type"
                    value={`member`}
                    className={classes.memberTypeInput}
                  />
                  <label>Member</label>
                </div>
                <div className={classes.memberType}>
                  <input
                    type="radio"
                    name="member_type"
                    value={`publisher`}
                    className={classes.memberTypeInput}
                  />
                  <label>Publisher</label>
                </div>
              </div>
              <div className={`form-data-group`}>
                <label className={`form-data-label`}>Name</label>
                <div className={`form-data-input`}>
                  <input type="text" placeholder={`Full Name`} />
                </div>
              </div>
              <div className={`form-data-group`}>
                <label className={`form-data-label`}>Your Email</label>
                <div className={`form-data-input`}>
                  <input type="email" placeholder={`name@domain.com`} />
                </div>
              </div>

              <div className={`form-data-group mb-3`}>
                <label className={`form-data-label`}>Website</label>
                <div className={`form-data-input`}>
                  <input type="text" placeholder={`www.example.com`} />
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

              <div className={`form-data-group mb-4`}>
                <label className={`form-data-label`}>Confirm Password</label>
                <div className={`form-data-input`}>
                  <input type="password" placeholder={`Repeat Password`} />
                </div>
              </div>

              <div className={`form-data-group mb-1`}>
                <button className={`button-pri`}>Register Now</button>
              </div>
              <div className={classes.toggleAuthLinks}>
                Already have an account ? <Link to="/login">Login Now</Link>
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

export { Register };
