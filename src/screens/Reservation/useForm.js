import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FormState from "helpers/form/FormState";
import AxiosInstance from "helpers/AxiosInstance";
import Swal from "sweetalert2";
import { calculatePages } from "helpers/pagination";
const useForm = () => {
  const [clients, setClients] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("");
  const history = useHistory();

  const attributes = [
    {
      name: "moyen_transport",
      title: "Moyen de transport",
      type: "text",
      order: false,
    },
    {
      name: "date_reservation",
      title: "Date de réservation",
      type: "date",
      order: true,
    },
    { name: "date_depart", title: "Date de départ", type: "date", order: true },
    {
      name: "heure_depart",
      title: "Heure de départ",
      type: "heure",
      order: true,
    },
    { name: "lieu_depart", title: "Lieu de départ", type: "text", order: true },
    {
      name: "lieu_arrive",
      title: "Lieu d'arrivée",
      type: "text",
      order: false,
    },

    { name: "prix", title: "Prix", type: "text", order: false },
    {
      name: "nombre_place",
      title: "Nombre de place",
      type: "text",
      order: false,
    },
  ];

  const actions = {
    details: null,
    delete: null,
    update: null,
  };

  useEffect(() => {
    setNumberOfPage(calculatePages(dataLength, limit));
  }, [dataLength]);

  const getAllReservations = () => {
    AxiosInstance.post("/getAllReservations", {
      order: order,
      limit: 5,
      page: currentPage,
    })
      .then((response) => {
        setClients(response.data.data);
        setDataLength(response.data.dataLength);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // formState is the data that we need
  const inputValues = {
    search: "",
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
    loading,
  } = FormState(inputValues, getAllReservations);

  useEffect(() => {
    getAllReservations();
  }, [currentPage, order]);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    clients,
    currentPage,
    setCurrentPage,
    numberOfPage,
    loading,
    order,
    setOrder,
    actions,
    attributes,
  };
};

export default useForm;
