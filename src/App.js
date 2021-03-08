import { Route, Switch } from "react-router-dom";
import { Landing, Login, Register, Home } from "./views";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.wrapper}>
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
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
