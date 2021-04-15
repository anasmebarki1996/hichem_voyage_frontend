import React, { useEffect, useState } from "react";
import Input from "./../Input/Input";
import Autocomplete from "./../Autocomplete/Autocomplete";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  let history = useHistory();

  const [form, setForm] = useState({
    lieu_depart: "",
    lieu_arrive: "",
    date_depart: "",
    moyen_transport: "",
  });
  const [list, setList] = useState([]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "lieu_depart" || name === "lieu_arrive") {
      var list = [...countries];
      setList(inputFilterHandler(list, value));
    }
  };

  const inputFilterHandler = (list, value) => {
    return list.filter(function (item) {
      item = item.toLowerCase();
      value = value.toLowerCase();
      return item.includes(value);
    });
  };

  const submitHandler = () => {
    history.push("/voyages");
  };

  var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
  ];
  return (
    <div class="home_search">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="home_search_container">
              <div class="home_search_title">Search for your trip</div>
              <div class="home_search_content">
                <form action="#" class="home_search_form" id="home_search_form">
                  <div class="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start">
                    {/* <Input /> */}
                    <Autocomplete
                      id="lieu_depart"
                      name="lieu_depart"
                      value={form.lieu_depart}
                      onChange={inputChangeHandler}
                      className="search_input"
                      placeholder="Départ"
                      list={countries}
                      required={true}
                    />
                    <Autocomplete
                      id="lieu_arrive"
                      name="lieu_arrive"
                      value={form.lieu_arrive}
                      onChange={inputChangeHandler}
                      className="search_input"
                      placeholder="Arrivée"
                      list={countries}
                      required={true}
                    />

                    <input
                      id="date_depart"
                      name="date_depart"
                      value={form.date_depart}
                      onChange={inputChangeHandler}
                      className="search_input search_input_3"
                      type="date"
                      placeholder="Date de départ"
                      required="required"
                      data-date-format="DD-MM-YYYY"
                    />

                    <select
                      name="moyen_transport"
                      id="moyen_transport"
                      class="search_input search_input_4"
                      value={form.moyen_transport}
                    >
                      <option value="" disabled selected>
                        Moyen de transport
                      </option>
                      <option value="Avion">Avion</option>
                      <option value="bus">Bus</option>
                      <option value="taxi">Taxi</option>
                      <option value="train">Train</option>
                    </select>
                    <button class="home_search_button" onClick={submitHandler}>
                      search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
