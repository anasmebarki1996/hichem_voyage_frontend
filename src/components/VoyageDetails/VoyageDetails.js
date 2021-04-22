import React from "react";
import "./style.css";

const VoyageDetails = () => {
  return (
    <>
      <div className="row voyage_detail_header">
        <div className="col-6">
          <div>Prix Total</div>
          <div>$56.61 </div>
        </div>
        <div className="col-6">1 Adult</div>
      </div>
      <div className="selected-journey">selected journey</div>
      <div className="box-container">
        <div className="row">
          <div className="col-6 time">05:52 </div>
          <div className="col-6 adresse">Paris Gare de Lyon </div>
        </div>
        <div className="row">
          <div className="col-6 duree">5 min </div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <div className="col-6 time">15:52 </div>
          <div className="col-6 adresse">Paris Gare de Lyon </div>
        </div>
      </div>
      <div className="selected-journey">Get ticket</div>
      <div>
        <button className="button">reserver</button>
      </div>
    </>
  );
};

export default VoyageDetails;
