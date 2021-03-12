import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Landing, Login, Register, Home, Menu, ViewProduct } from "./views";
import { ScrollToTop } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.wrapper}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route
          path="/product/:id"
          render={(props) => <ViewProduct {...props} />}
        ></Route>
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
