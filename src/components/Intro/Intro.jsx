import React from "react";

function Intro() {
  return (
    <div class="intro">
      <div class="intro_background"></div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="intro_container">
              <div class="row">
                <div class="col-lg-4 intro_col">
                  <div class="intro_item d-flex flex-row align-items-end justify-content-start">
                    <div class="intro_icon">
                      <img src="assets/img/beach.svg" alt="" />
                    </div>
                    <div class="intro_content">
                      <div class="intro_title">Toutes les Destinations</div>
                      <div class="intro_subtitle">
                        <p>Nulla pretium tincidunt felis, nec.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 intro_col">
                  <div class="intro_item d-flex flex-row align-items-end justify-content-start">
                    <div class="intro_icon">
                      <img src="assets/img/wallet.svg" alt="" />
                    </div>
                    <div class="intro_content">
                      <div class="intro_title">Les meilleurs prix</div>
                      <div class="intro_subtitle">
                        <p>Sollicitudin mauris lobortis in.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 intro_col">
                  <div class="intro_item d-flex flex-row align-items-end justify-content-start">
                    <div class="intro_icon">
                      <img src="assets/img/suitcase.svg" alt="" />
                    </div>
                    <div class="intro_content">
                      <div class="intro_title">Toutes les propositios</div>
                      <div class="intro_subtitle">
                        <p>Nulla pretium tincidunt felis, nec.</p>
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
  );
}

export default Intro;
