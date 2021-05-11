import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home/Home";
// import About from "./About/About";
import Voyages from "./Voyages/Voyages";

const AppRouter = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/voyages">
          <Voyages />
        </Route>
        {/*  <Route path="/about">
          <About />
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default AppRouter;
