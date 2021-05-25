import React from "react";
import "./style.css";
import UpdateInformations from "./UpdateInformations/UpdateInformations";
import UpdatePassword from "./UpdatePassword/UpdatePassword";

function Profile() {
  return (
    <>
      <div class="not_home">
        <div class="background_image_min background_image_about">
          <h1>Profile</h1>
        </div>
      </div>
      <div class="about">
        <div class="container">
          <UpdateInformations />
          <UpdatePassword />
        </div>
      </div>
    </>
  );
}

export default Profile;
