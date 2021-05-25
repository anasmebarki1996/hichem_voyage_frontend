import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import Swal from "sweetalert2";

const useForm = (showModalLogin) => {
  const register = () => {
    axios
      .post("/register", {
        nom: formState.inputValues.nom,
        prenom: formState.inputValues.prenom,
        email: formState.inputValues.email,
        password: formState.inputValues.password,
        date_naissance: formState.inputValues.date_naissance,
        num_tel: formState.inputValues.num_tel,
        adresse: formState.inputValues.adresse,
      })
      .then((reponse) => {
        showModalLogin();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Vous etes inscrit. Veuillez vous vérifier votre email s'il vous plait",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        Swal.fire("Erreur!", error.data, "error");
      });
  };

  // formState is the data that we need
  const inputValues = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    date_naissance: "",
    num_tel: "",
    adresse: "",
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
  } = FormState(inputValues, register);

  console.log(formState.inputHasErrors);

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
