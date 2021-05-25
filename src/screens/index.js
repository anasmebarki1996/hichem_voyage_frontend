import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "store/auth/authAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "screens/About/About";
import Profile from "screens/Profile/Profile";
import Home from "screens/Home/Home";
import Voyages from "screens/Voyages/Voyages";
import Footer from "components/layouts/Footer/Footer";
import Header from "components/layouts/Header/Header";
import LoginModal from "components/Modals/LoginModal/LoginModal";
import RegisterModal from "components/Modals/RegisterModal/RegisterModal";
import Reservation from "./Reservation/Reservation";

const Index = () => {
  const [toggleModalLogin, setToggleModalLogin] = useState(false);
  const [toggleModalRegister, setToggleModalRegister] = useState(false);

  const showModalLogin = () => {
    setToggleModalRegister(false);
    setToggleModalLogin(true);
  };

  const showModalRegister = () => {
    setToggleModalLogin(false);
    setToggleModalRegister(true);
  };
  const dispatch = useDispatch();
  dispatch(checkToken());
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.auth.name);

  return (
    <Router>
      <Header
        setToggleModalLogin={setToggleModalLogin}
        setToggleModalRegister={setToggleModalRegister}
        isLoggedIn={isLoggedIn}
        name={name}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/voyages">
          <Voyages showModalLogin={showModalLogin} />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        {isLoggedIn && (
          <>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
          </>
        )}
      </Switch>
      <Footer />
      {!isLoggedIn && (
        <>
          <LoginModal
            toggleModalLogin={toggleModalLogin}
            setToggleModalLogin={setToggleModalLogin}
            showModalRegister={showModalRegister}
          />
          <RegisterModal
            toggleModalRegister={toggleModalRegister}
            setToggleModalRegister={setToggleModalRegister}
            showModalLogin={showModalLogin}
          />
        </>
      )}
    </Router>
  );
};

export default Index;
