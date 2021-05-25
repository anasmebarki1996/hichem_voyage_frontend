import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "helpers/AxiosInstance";
import Swal from "sweetalert2";

const useForm = (showModalLogin) => {
  const history = useHistory();
  const location = useLocation();

  const [nombre_place, setNombre_place] = useState(1);

  const reserver = (voyage_id, isLoggedIn) => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "etes vous sur de confirmer cette reservation ?",
        showCancelButton: true,
        confirmButtonText: `Oui`,
        cancelButtonText: `Annuler`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          createReservation(voyage_id);
        }
      });
    } else {
      showModalLogin();
    }
  };

  const createReservation = (voyage_id) => {
    axios
      .post("/createReservation", {
        nombre_place: nombre_place,
        voyage_id: voyage_id,
        user_id: 15,
      })
      .then((response) => {
        Swal.fire("Success!", "reservation validé", "success");
      })
      .catch((error) => {
        Swal.fire("Erreur!", error.data, "error");
      });
  };

  return {
    nombre_place,
    setNombre_place,
    reserver,
  };
};

export default useForm;
