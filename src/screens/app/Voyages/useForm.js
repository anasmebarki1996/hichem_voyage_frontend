import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "helpers/AxiosInstance";
import wilayas from "constants/wilayas";
import FormState from "helpers/form/FormState";
import Swal from "sweetalert2";

const useForm = () => {
  const history = useHistory();
  const location = useLocation();

  const [voyageList, setVoyageList] = useState([]);
  const [selectedVoyage, setSelectedVoyage] = useState({});
  useEffect(() => {
    if (location.params) {
      console.log(location.params);
      inputValues = {
        lieu_depart: location.params.lieu_depart
          ? location.params.lieu_depart
          : "",
        lieu_arrive: location.params.lieu_arrive
          ? location.params.lieu_arrive
          : "",
        date_depart: location.params.date_depart
          ? location.params.date_depart
          : "",
        moyen_transport: location.params.moyen_transport
          ? location.params.moyen_transport
          : "",
      };
      updateFormState(inputValues);
      // submitHandler();
    }
    getAllVoyages();
  }, []);

  const getAllVoyages = () => {
    axios
      .post("/getAllVoyages", {
        limit: 50,
        // lieu_depart: formState.inputValues.lieu_depart,
        // lieu_arrive: formState.inputValues.lieu_arrive,
        // date_depart: formState.inputValues.date_depart,
        // moyen_transport: formState.inputValues.moyen_transport,
      })
      .then((response) => {
        setVoyageList(response.data.data);
      })
      .catch(() => {});
  };

  // formState is the data that we need
  let inputValues = {
    lieu_depart: "",
    lieu_arrive: "",
    date_depart: "",
    moyen_transport: "",
  };

  // serverMessage is the messages coming from the server api
  const [serverMessage, setServerMessage] = useState({
    error: "",
    success: "",
  });

  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
    updateFormState,
  } = FormState(inputValues, getAllVoyages);

  return {
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
  };
};

export default useForm;
