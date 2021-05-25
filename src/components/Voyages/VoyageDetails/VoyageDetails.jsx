import React from "react";
import useForm from "./useForm";

import "./style.css";
import Text from "components/UI/Text/Text";

const VoyageDetails = ({ selectedVoyage, showModalLogin }) => {
  const { reserver, nombre_place, setNombre_place } = useForm(showModalLogin);

  // "voyage_id": 1,
  // "moyen_transport": "taxi",
  // "date_depart": "2021-04-19T23:00:00.000Z",
  // "heure_depart": "22:50:00",
  // "duree": "00:50:00",
  // "heure_arrive": "23:40:00",
  // "lieu_depart": "tlemcen",
  // "agence_nom": "gare routiere de tlemcen",
  // "lieu_arrive": "oran",
  // "prix": 100,
  // "max_place": 32,
  // "place_reserve": 35,
  // "place_restant": -3

  if (Object.entries(selectedVoyage).length) {
    return (
      <>
        <div className="row voyage_detail_header">
          <div className="col-6">
            <div>Prix Unitaire</div>
            <div>{selectedVoyage.prix} DA</div>
          </div>
          <div className="col-6">{nombre_place} Place(s)</div>
        </div>
        <div className="selected-journey">selected journey</div>
        <div className="box-container">
          <div className="row">
            <div className="col-6 time">
              <Text text={selectedVoyage.heure_depart} type="time" />{" "}
            </div>
            <div className="col-6 adresse">
              {/* {selectedVoyage.agence} -  */}
              <b className="text-capitalize">{selectedVoyage.lieu_depart}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-6 duree">
              <Text text={selectedVoyage.duree} type="duree" />
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-6 time">
              <Text text={selectedVoyage.heure_arrive} type="time" />{" "}
            </div>
            <div className="col-6 adresse">
              <b className="text-capitalize">{selectedVoyage.lieu_arrive}</b>{" "}
            </div>
          </div>
        </div>
        <div className="selected-journey">Get ticket</div>
        <div className="box-container ">
          <div className="row pt-4 pb-4">
            <div className="col-5 adresse">Nombre de place</div>
            <div className="col-2">
              <input
                className="form-control"
                type="number"
                max={selectedVoyage.place_restant}
                min="1"
                value={nombre_place}
                onChange={(e) => setNombre_place(e.target.value)}
              />
            </div>
            <div className="col-5 adresse">
              ({selectedVoyage.place_restant} places restantes )
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-dark w-100 button-reservation"
            onClick={() => reserver(selectedVoyage.voyage_id)}
          >
            Reserver {selectedVoyage.prix * nombre_place} DA
          </button>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="no_voyage_selected">
          <h3>aucun voyage selectionné</h3>
        </div>
      </>
    );
};

export default VoyageDetails;
