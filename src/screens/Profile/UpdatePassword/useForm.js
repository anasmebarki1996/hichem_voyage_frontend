import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import Swal from "sweetalert2";
const useForm = () => {
  const updateUserPassword = () => {
    axios
      .post("/updateUserPassword", {
        password: formState.inputValues.password,
        password_confirm: formState.inputValues.password_confirm,
      })
      .then((response) => {
        Swal.fire("Informations modifié", "", "success");
      })
      .catch((error) => {
        Swal.fire(error.data, "", "error");
      });
  };
  // formState is the data that we need
  let inputValues = {
    password: "",
    password_confirm: "",
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
  } = FormState(inputValues, updateUserPassword);

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
