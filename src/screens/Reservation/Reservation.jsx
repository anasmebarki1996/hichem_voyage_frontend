import Table from "components/Table/Table";
import React from "react";
import "./style.css";
import useForm from "./useForm";

function Reservation() {
  const {
    formState,
    loading,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    clients,
    currentPage,
    numberOfPage,
    setCurrentPage,
    setOrder,
    order,
    actions,
    attributes,
  } = useForm();
  return (
    <>
      <div class="not_home">
        <div class="background_image_min background_image_reservation">
          <h1>Reservation</h1>
        </div>
      </div>
      <div class="about">
        <div class="container">
          <div className="row p-4">
            <div className="col-md-12 pb-3">
              <h3>Mes reservations</h3>
              <Table
                attributes={attributes}
                actions={actions}
                data={clients}
                loading={loading}
                search={submitHandler}
                numberOfPage={numberOfPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setOrder={setOrder}
                order={order}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
