import React from "react";

function Testimonials() {
  return (
    <div class="testimonials" id="testimonials">
      <div
        class="parallax_background parallax-window"
        data-parallax="scroll"
        data-image-src="assets/img/testimonials.jpg"
        data-speed="0.8"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="section_subtitle">simply amazing places</div>
            <div class="section_title">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>
        <div class="row testimonials_row">
          <div class="col">
            <div class="testimonials_slider_container">
              <div class="owl-carousel owl-theme testimonials_slider owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div class="owl-stage owl-stage-testimonials">
                    <div
                      class="owl-item cloned"
                      //  style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>Mebarki yacine,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      class="owl-item cloned"
                      //      style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>john turner,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item"
                      //  style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>john turner,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item active"
                      //  style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>john turner,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item"
                      //    style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>john turner,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>john turner,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      // style="width: 1140px"
                    >
                      <div class="owl-item text-center">
                        <div class="testimonial">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. lobortis dolor. Cras placerat lectus a posuere
                          aliquet. Curabitur quis vehicula odio.
                        </div>
                        <div class="testimonial_author">
                          <div class="testimonial_author_content d-flex flex-row align-items-end justify-content-start">
                            <div>john turner,</div>
                            <div>client</div>
                          </div>
                        </div>
                      </div>
                    </div>
                   */}
                  </div>
                </div>
                <div class="owl-nav disabled">
                  <div class="owl-prev">prev</div>
                  <div class="owl-next">next</div>
                </div>
                <div class="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="test_nav">
        {/* <ul class="d-flex flex-column align-items-end justify-content-end">
          <li>
            <a href="#">
              City Breaks Clients<span>01</span>
            </a>
          </li>
          <li>
            <a href="#">
              Cruises Clients<span>02</span>
            </a>
          </li>
          <li>
            <a href="#">
              All Inclusive Clients<span>03</span>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Testimonials;
