import React from "react";
import "./style.css";

import VoyageDetails from "components/VoyageDetails/VoyageDetails";
import VoyageList from "components/VoyageList/VoyageList";

const VoyageItem = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-5 table">
          <VoyageList />
        </div>
        <div className="col-12 col-md-5 table">
          <VoyageDetails />
        </div>
      </div>
    </div>
  );
};

export default VoyageItem;
