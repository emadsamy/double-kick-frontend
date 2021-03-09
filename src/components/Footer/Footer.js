import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.footerTop}>
          <div className={`container`}>
            <div className={`row`}>
              <div className={`col-lg-4`}>
                <div className={`bg-title mb-3`}>Logo Here</div>
                <div className={`text gray ${classes.footerText}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make
                </div>
              </div>

              <div className={`col-lg-3`}>
                <div className={classes.footerLinks}>
                  <div className={classes.footerLink}>
                    <Link>Menu</Link>
                  </div>
                  <div className={classes.footerLink}>
                    <Link>Contact</Link>
                  </div>
                  <div className={classes.footerLink}>
                    <Link>About Us</Link>
                  </div>
                </div>
              </div>

              <div className={`col-lg-3`}>
                <div className={classes.footerLinks}>
                  <div className={classes.footerLink}>
                    <Link>Page Link 1</Link>
                  </div>
                  <div className={classes.footerLink}>
                    <Link>Page Link 2</Link>
                  </div>
                  <div className={classes.footerLink}>
                    <Link>Page Link 3</Link>
                  </div>
                  <div className={classes.footerLink}>
                    <Link>Page Link 4</Link>
                  </div>
                  <div className={classes.footerLink}>
                    <Link>Page Link 5</Link>
                  </div>
                </div>
              </div>

              <div className={`col-lg-2`}>
                <div className={classes.socialmedia}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footerBottom}>
          2021 All Rights Reserved © Logo Here
        </div>
      </div>
    </footer>
  );
};

export { Footer };
