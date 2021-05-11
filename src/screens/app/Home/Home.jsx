import React from "react";
import Destinations from "components/Destinations/Destinations";
import Intro from "components/Intro/Intro";
import Search from "components/Search/Search";
import Testimonials from "components/Testimonials/Testimonials";
import News from "components/News/News";
import useForm from "./useForm";
import { useEffect } from "react";
import wilayas from "constants/wilayas";
function Home() {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler,
    resetFormState,
  } = useForm();

  return (
    <>
      <div className="home">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div className="owl-item active">
                  <div className="owl-item">
                    <div className="background_image_slider"></div>
                    <div className="home_slider_content_container">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div className="home_slider_content">
                              <div className="home_title">
                                <h2>Let us take you away</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_page_nav">
            <ul className="d-flex flex-column align-items-end justify-content-end">
              <li>
                <a href="#" data-scroll-to="#destinations">
                  Offers<span>01</span>
                </a>
              </li>
              <li>
                <a href="#" data-scroll-to="#testimonials">
                  Testimonials<span>02</span>
                </a>
              </li>
              <li>
                <a href="#" data-scroll-to="#news">
                  Latest<span>03</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Search
        formState={formState}
        inputChangeHandler={inputChangeHandler}
        inputBlurHandler={inputBlurHandler}
        submitHandler={submitHandler}
        wilayas={wilayas}
      />
      {/* <Intro />
      <Destinations />
      <Testimonials />
      <News /> */}
    </>
  );
}

export default Home;
