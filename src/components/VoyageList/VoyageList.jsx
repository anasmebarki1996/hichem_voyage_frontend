import MoyenTransport from "components/MoyenTransport/MoyenTransport";
import Text from "components/UI/Text/Text";
import { calculateDateArrivee } from "helpers/format/dateFormat";
import React from "react";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const VoyageList = ({ data }) => {
  useEffect(() => {
    console.log("data");
    console.log(data);
  }, []);
  return (
    <>
      <div className="row column_item table-header">
        <div className="col-4 col-md-9 item">
          icon <Text text={"18 mars 2020"} type="fullDate"></Text>{" "}
        </div>
        <div className="col-4 col-md-3 item">Prix</div>
      </div>
      {data.map((item) => {
        return (
          <div
            className="row column_item "
            key={item.id}
            onClick={() => {
              alert("coucou : " + item.id);
            }}
          >
            <div className="col-4 col-md-3 item">
              <MoyenTransport moyen_transport={item.moyen_transport} />{" "}
              <Text text={item.moyen_transport} type="text" />{" "}
            </div>
            <div className="col-4 col-md-6 item">
              <div>
                <b>
                  <Text text={item.heure_depart} type="time" />
                </b>
                <BsArrowRight />
                <b>
                  <Text
                    text={calculateDateArrivee(item.heure_depart, item.duree)}
                    type="time"
                  ></Text>
                </b>
              </div>
              <small>
                <Text text={item.duree} type="duree" />
              </small>
            </div>
            <div className="col-4 col-md-3 item">{item.prix} DA</div>
          </div>
        );
      })}
      {/* <div className="row column_item ">
        <div className="col-6 col-md-3 item">bus </div>
        <div className="col-6 col-md-6 item">
          <div>
            <b>9h30</b>
            <BsArrowRight /> <b>9h30</b>
          </div>
          <small>2h30min.</small>
        </div>
        <div className="col-6 col-md-3 item">50 DA</div>
      </div>
      <div className="row column_item column_item_last">
        <div className="col-6 col-md-3 item">bus </div>
        <div className="col-6 col-md-6 item">
          <div>
            <b>9h30</b> <BsArrowRight /> <b>9h30</b>
          </div>
          <small>2h30min.</small>
        </div>
        <div className="col-6 col-md-3 item">50 DA</div>
      </div> */}
    </>
  );
};

export default VoyageList;
