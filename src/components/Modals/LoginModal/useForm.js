import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import * as authActions from "store/auth/authAction";

const useForm = (setToggleModalLogin) => {
  const dispatch = useDispatch();
  const login = () => {
    axios
      .post("/login", {
        email: formState.inputValues.email,
        password: formState.inputValues.password,
      })
      .then((response) => {
        console.log(response);
        setToggleModalLogin(false);
        dispatch(
          authActions.loginSuccess(
            response.access_token,
            response.expires_in,
            response.nom + " " + response.prenom
          )
        );
      })
      .catch((error) => {
        setServerMessage({ error: error.data });
        console.log(error);
      });
  };

  // formState is the data that we need
  const inputValues = {
    email: "",
    password: "",
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
  } = FormState(inputValues, login);

  return {
    formState,
    serverMessage,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
  };
};

export default useForm;
