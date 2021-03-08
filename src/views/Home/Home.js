import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import { Sidebar, UpperBar } from "../../components";
import { Publishers } from "./Publishers";

class Home extends Component {
  state = {
    categories: [
      {
        id: 1,
        title: "Restaurants",
        icon: "icon-food",
        link: "/home",
        slug: "restaurants",
      },
      {
        id: 2,
        title: "Coffees",
        icon: "icon-coffee",
        link: "/home",
        slug: "coffees",
      },
    ],
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className={classes.homePage}>
        <Sidebar />
        <div className={classes.homeWrapper}>
          <div className={classes.upperBar}>
            <UpperBar />
          </div>
          <div className={classes.homeContent}>
            <Switch>
              <Route path="/home" exact>
                <div>
                  <div className={`bg-title mb-4 ${classes.bgTitle}`}>
                    Categories
                  </div>
                  <div className={classes.categoriesRow}>
                    {this.state.categories.map((category, index) => {
                      return (
                        <NavLink
                          key={index}
                          to={`${category.link}/${category.slug}`}
                          className={classes.card}
                        >
                          <span
                            className={`${category.icon} ${classes.icon}`}
                          ></span>
                          <div className={classes.cardTitle}>
                            {category.title}
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </Route>
              <Route path="/home/:id">
                {/* <div>Restaurants</div> */}
                <Publishers />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export { Home };
