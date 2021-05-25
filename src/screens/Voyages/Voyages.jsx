import React, { useEffect, useState } from "react";

import useForm from "./useForm";

import Search from "components/Search/Search";
import VoyageList from "components/Voyages/VoyageList/VoyageList";
import VoyageDetails from "components/Voyages/VoyageDetails/VoyageDetails";

import "./style.css";

const Voyages = ({ showModalLogin }) => {
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
        <div className="row d-flex justify-content-center pt-5 pb-5">
          {voyageList.length ? (
            <>
              <div className="col-12 col-md-5 table ">
                <VoyageList
                  dateDepart={formState.inputValues.date_depart}
                  data={voyageList}
                  setSelectedVoyage={setSelectedVoyage}
                />
              </div>
              <div className="col-12 col-md-5 table ">
                <VoyageDetails
                  selectedVoyage={selectedVoyage}
                  showModalLogin={showModalLogin}
                />
              </div>
            </>
          ) : (
            <div className="p-5">
              <h2>Nous somme désolé. Il n'a pas de trajet disponible </h2>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Voyages;
