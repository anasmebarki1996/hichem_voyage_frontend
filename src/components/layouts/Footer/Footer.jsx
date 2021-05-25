import React from "react";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="newsletter">
              <div class="newsletter_title_container text-center">
                <div class="newsletter_title">News letter</div>
                <div class="newsletter_subtitle">
                  Rejoingnez nous dés maintenant!
                </div>
              </div>
              <div class="newsletter_form_container">
                <div class="d-flex flex-md-row flex-column align-items-start justify-content-between">
                  <input
                    type="email"
                    class="newsletter_input newsletter_input_email ml-4 mr-4"
                    id="newsletter_input_email"
                    placeholder="Your e-mail"
                    required="required"
                  />
                  <button class="newsletter_button">subscribe</button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row footer_contact_row">
          <div class="col-xl-10 offset-xl-1">
            <div class="row">
              <div class="col-12 footer_contact_col">
                <div class="footer_contact_item d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="footer_contact_list">
                    <ul>
                      <li>contact@voyage-algerie.com</li>
                      <li>+213 43 32 65 45</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col text-center pb-3">
        Copyright ©<script>document.write(new Date().getFullYear());</script>
        2021 All rights reserved by{" "}
        <a href="#" target="_blank">
          ALGERIE-VOYAGE
        </a>
      </div>
    </footer>
  );
}

export default Footer;
