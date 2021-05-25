import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as authActions from "store/auth/authAction";

import "./style.css";
function Header({
  name,
  isLoggedIn,
  setToggleModalLogin,
  setToggleModalRegister,
}) {
  let history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    history.push({
      pathname: "/",
    });
    dispatch(authActions.logout());
  };
  return (
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="header_content_inner d-flex flex-row align-items-end justify-content-start">
                <div class="logo">
                  <a href="index.html">ALGERIE-VOYAGE</a>
                </div>
                <nav class="main_nav">
                  <ul class="d-flex flex-row align-items-start justify-content-start">
                    <li class="active">
                      <Link to="/">Home</Link>
                    </li>
                    {isLoggedIn && (
                      <li>
                        <Link to="/reservation">Mes réservations</Link>
                      </li>
                    )}
                    {/* <li>
                      <Link to="/about">About</Link>
                    </li> */}
                    {/* <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li> */}
                    <li>
                      {!isLoggedIn ? (
                        <>
                          <button
                            className="auth_header_button"
                            onClick={() => setToggleModalLogin(true)}
                          >
                            Login
                          </button>{" "}
                          /{" "}
                          <button
                            className="auth_header_button"
                            onClick={() => setToggleModalRegister(true)}
                          >
                            Register
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="auth_header_button dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {name}
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <Link class="dropdown-item" to="/profile">
                              Profile
                            </Link>
                            <Link class="dropdown-item" onClick={logout}>
                              Déconnexion
                            </Link>
                          </div>
                        </>
                      )}
                    </li>
                  </ul>
                </nav>
                {/* <div class="header_phone ml-auto">
                  {!isLoggedIn ? (
                    <>
                      <button
                        className="auth_header_button"
                        onClick={() => setToggleModalLogin(true)}
                      >
                        Login
                      </button>{" "}
                      /{" "}
                      <button
                        className="auth_header_button"
                        onClick={() => setToggleModalRegister(true)}
                      >
                        Register
                      </button>
                    </>
                  ) : (
                    <button className="auth_header_button">{name}</button>
                  )}
                </div>
               
                <div class="header_phone ml-auto"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_social d-flex flex-row align-items-center justify-content-start">
        <ul class="d-flex flex-row align-items-start justify-content-start">
          <li>
            <a href="#">
              <i class="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">xxx</a>
          </li>
          <li>
            <a href="#">bbb</a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-behance" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
