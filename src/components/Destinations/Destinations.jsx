import React from "react";
import "./style.css";
function Destinations() {
  return (
    <div class="destinations" id="destinations">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            {/* <div class="section_subtitle">simply amazing places</div> */}
            <div class="section_title">
              <h2>Destinations</h2>
            </div>
          </div>
        </div>
        <div class="row destinations_row">
          <div class="col">
            <div class="destinations_container item_grid item_grid_position row">
              <div class="destination item item1">
                <div class="destination_image">
                  <img src="assets/img/destination_1.jpg" alt="" />
                  {/* <div class="spec_offer text-center">
                    <a href="#">Special Offer</a>
                  </div> */}
                </div>
                <div class="destination_content">
                  <div class="destination_title">
                    <a href="destinations.html">Alger</a>
                  </div>
                  <div class="destination_subtitle">
                    <p>La capitale.</p>
                  </div>
                  {/* <div class="destination_price">From $679</div> */}
                </div>
              </div>

              <div class="destination item item2">
                <div class="destination_image">
                  <img src="assets/img/destination_2.jpg" alt="" />
                </div>
                <div class="destination_content">
                  <div class="destination_title">
                    <a href="destinations.html">Annaba</a>
                  </div>
                  <div class="destination_subtitle">
                    <p>.</p>
                  </div>
                  {/* <div class="destination_price">From $679</div> */}
                </div>
              </div>

              <div class="destination item item3">
                <div class="destination_image">
                  <img src="assets/img/destination_3.jpg" alt="" />
                </div>
                <div class="destination_content">
                  <div class="destination_title">
                    <a href="destinations.html">Oran</a>
                  </div>
                  <div class="destination_subtitle">
                    <p>.</p>
                  </div>
                  {/* <div class="destination_price">From $679</div> */}
                </div>
              </div>

              <div class="destination item item4">
                <div class="destination_image">
                  <img src="assets/img/destination_4.jpg" alt="" />
                </div>
                <div class="destination_content">
                  <div class="destination_title">
                    <a href="destinations.html">Tlemcen</a>
                  </div>
                  <div class="destination_subtitle">
                    <p>.</p>
                  </div>
                  {/* <div class="destination_price">From $679</div> */}
                </div>
              </div>

              <div class="destination item item5">
                <div class="destination_image">
                  <img src="assets/img/destination_5.jpg" alt="" />
                </div>
                <div class="destination_content">
                  <div class="destination_title">
                    <a href="destinations.html">Jijel</a>
                  </div>
                  <div class="destination_subtitle">
                    <p>.</p>
                  </div>
                  {/* <div class="destination_price">From $679</div> */}
                </div>
              </div>

              <div class="destination item item6">
                <div class="destination_image">
                  <img src="assets/img/destination_6.jpg" alt="" />
                </div>
                <div class="destination_content">
                  <div class="destination_title">
                    <a href="destinations.html">Ghardaia</a>
                  </div>
                  <div class="destination_subtitle">
                    <p>.</p>
                  </div>
                  {/* <div class="destination_price">From $679</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
