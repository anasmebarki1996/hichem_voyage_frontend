import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "helpers/AxiosInstance";
import wilayas from "constants/wilayas";
import FormState from "helpers/form/FormState";
import Swal from "sweetalert2";

const useForm = () => {
  let history = useHistory();

  const voyages = () => {
    history.push({
      pathname: "/voyages",
      params: {
        lieu_depart: formState.inputValues.lieu_depart,
        lieu_arrive: formState.inputValues.lieu_arrive,
        date_depart: formState.inputValues.date_depart,
        moyen_transport: formState.inputValues.moyen_transport,
      },
    });
  };

  // formState is the data that we need
  const inputValues = {
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
  } = FormState(inputValues, voyages);

  return {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
  };
};

export default useForm;
