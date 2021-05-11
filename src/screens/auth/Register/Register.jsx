import React from "react";
import "./style.css";

const Register = () => {
  return (
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image">
          <img src="news_3.jpg" alt="coucou" className="bg-imag" />
        </div>

        <div class="col-md-6 bg-light">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <h3 class="display-4">Split page!</h3>
                  <p class="text-muted mb-4">
                    Create a login split page using Bootstrap 4.
                  </p>
                  <form>
                    <div class="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        autofocus=""
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required=""
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Sign in
                    </button>
                    <div class="text-center d-flex justify-content-between mt-4">
                      <p>
                        you don"t have an account ?{" "}
                        <button
                          className="auth_switch_login_register"
                          onClick={() => {
                            alert("helllo");
                          }}
                        >
                          {" "}
                          click here{" "}
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
