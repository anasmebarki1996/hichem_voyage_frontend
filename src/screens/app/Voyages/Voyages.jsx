import React, { useEffect, useState } from "react";

import useForm from "./useForm";

import Search from "components/Search/Search";
import VoyageList from "components/VoyageList/VoyageList";
import VoyageItem from "components/VoyageItem/VoyageItem";
import VoyageDetails from "components/VoyageDetails/VoyageDetails";

const Voyages = () => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
    wilayas,
    voyageList,
    selectedVoyage,
    setSelectedVoyage,
  } = useForm();

  return (
    <>
      <div class="home_small">
        <div class="background_image_slider"></div>
      </div>
      <Search
        formState={formState}
        inputChangeHandler={inputChangeHandler}
        inputBlurHandler={inputBlurHandler}
        submitHandler={submitHandler}
        wilayas={wilayas}
      />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-5 table">
            <VoyageList
              data={voyageList}
              setSelectedVoyage={setSelectedVoyage}
            />
          </div>
          <div className="col-12 col-md-5 table">
            <VoyageDetails selectedVoyage={selectedVoyage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Voyages;
