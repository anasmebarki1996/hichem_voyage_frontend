import React, { useEffect, useState } from "react";
import Input from "components/UI/Input/Input";
import moyen_transport from "constants/moyenTransport";

const Search = ({
  formState,
  inputChangeHandler,
  inputBlurHandler,
  submitHandler,
  resetFormState,
  wilayas,
}) => {
  return (
    <div class="home_search">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="home_search_container">
              <div class="home_search_title">Recherchez votre voyage</div>
              <div class="home_search_content">
                <div class="home_search_form" id="home_search_form">
                  <div class="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start">
                    <Input
                      type="autoComplete"
                      id="lieu_depart"
                      name="lieu_depart"
                      value={formState.inputValues.lieu_depart}
                      error={formState.inputHasErrors.lieu_depart}
                      onChange={(e) => {
                        inputChangeHandler(
                          "lieu_depart",
                          e.target.value,
                          formState.inputHasErrors.lieu_depart,
                          formState.inputVisited.lieu_depart
                        );
                      }}
                      onBlur={() => inputBlurHandler("lieu_depart")}
                      className="search_input form-control"
                      placeholder="Départ"
                      list={wilayas}
                      required={true}
                    />
                    <Input
                      type="autoComplete"
                      id="lieu_arrive"
                      name="lieu_arrive"
                      value={formState.inputValues.lieu_arrive}
                      error={formState.inputHasErrors.lieu_arrive}
                      onChange={(e) => {
                        inputChangeHandler(
                          "lieu_arrive",
                          e.target.value,
                          formState.inputHasErrors.lieu_arrive,
                          formState.inputVisited.lieu_arrive
                        );
                      }}
                      onBlur={() => inputBlurHandler("lieu_arrive")}
                      className="search_input form-control"
                      placeholder="Arrivée"
                      list={wilayas}
                      required={true}
                    />

                    <Input
                      type="date"
                      id="date_depart"
                      name="date_depart"
                      value={formState.inputValues.date_depart}
                      error={formState.inputHasErrors.date_depart}
                      onChange={(e) => {
                        inputChangeHandler(
                          "date_depart",
                          e.target.value,
                          formState.inputHasErrors.date_depart,
                          formState.inputVisited.date_depart
                        );
                      }}
                      onBlur={() => inputBlurHandler("date_depart")}
                      className="search_input  form-control"
                      placeholder="Date de départ"
                      required="required"
                    />

                    <Input
                      type="select"
                      id="moyen_transport"
                      name="moyen_transport"
                      value={formState.inputValues.moyen_transport}
                      error={formState.inputHasErrors.moyen_transport}
                      onChange={(e) => {
                        inputChangeHandler(
                          "moyen_transport",
                          e.target.value,
                          formState.inputHasErrors.moyen_transport,
                          formState.inputVisited.moyen_transport
                        );
                      }}
                      onBlur={() => inputBlurHandler("moyen_transport")}
                      className="search_input  form-control"
                      placeholder="Moyen de transport"
                      data={moyen_transport}
                      required="required"
                    />
                    <button class="home_search_button" onClick={submitHandler}>
                      RECHERCHER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
