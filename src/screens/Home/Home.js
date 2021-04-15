import React from "react";
import Destinations from "../../components/Destinations/Destinations";
import Intro from "../../components/Intro/Intro";
import Search from "../../components/Search/Search";
import Testimonials from "../../components/Testimonials/Testimonials";
import News from "../../components/News/News";

function Home() {
  return (
    <>
      <div class="home">
        <div class="home_slider_container">
          <div class="owl-carousel owl-theme home_slider owl-loaded">
            <div class="owl-stage-outer">
              <div class="owl-stage">
                <div class="owl-item active">
                  <div class="owl-item">
                    <div class="background_image_slider"></div>
                    <div class="home_slider_content_container">
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <div class="home_slider_content">
                              <div class="home_title">
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
          <div class="home_page_nav">
            <ul class="d-flex flex-column align-items-end justify-content-end">
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
      <Search />
      <Intro />
      <Destinations />
      <Testimonials />
      <News />
    </>
  );
}

export default Home;
