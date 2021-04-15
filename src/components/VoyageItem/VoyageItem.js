import React from "react";
import "./style.css";

import { BsArrowRight } from "react-icons/bs";

const VoyageItem = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 table">
          <div className="row column_item table-header">
            <div className="col-4 col-md-9 item">icon 18 mars 2020 </div>
            <div className="col-4 col-md-3 item">Prix</div>
          </div>
          <div className="row column_item ">
            <div className="col-4 col-md-3 item">bus </div>
            <div className="col-4 col-md-6 item">
              <div>
                <b>9h30</b> <BsArrowRight /> <b>9h30</b>
              </div>
              <small>2h30min.</small>
            </div>
            <div className="col-4 col-md-3 item">50 DA</div>
          </div>
          <div className="row column_item ">
            <div className="col-6 col-md-3 item">bus </div>
            <div className="col-6 col-md-6 item">
              <div>
                <b>9h30</b>
                <BsArrowRight /> <b>9h30</b>
              </div>
              <small>2h30min.</small>
            </div>
            <div className="col-6 col-md-3 item">50 DA</div>
          </div>
          <div className="row column_item column_item_last">
            <div className="col-6 col-md-3 item">bus </div>
            <div className="col-6 col-md-6 item">
              <div>
                <b>9h30</b> <BsArrowRight /> <b>9h30</b>
              </div>
              <small>2h30min.</small>
            </div>
            <div className="col-6 col-md-3 item">50 DA</div>
          </div>
        </div>
        <div className="col-12 col-md-5 table">
          <div className="row">
            <div className="col-6">
              <div>outBound</div>
              <div>$56.61 </div>
            </div>
            <div className="col-6">1 Adult</div>
          </div>
          <div>selected journey</div>
          <div className="box-container">
            <div className="row">
              <div className="col-6">05:52 </div>
              <div className="col-6">Paris Gare de Lyon </div>
            </div>
            <div className="row">
              <div className="col-6">5min </div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              <div className="col-6">05:52 </div>
              <div className="col-6">Paris Gare de Lyon </div>
            </div>
          </div>
          <div>
            <button>reserver</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoyageItem;