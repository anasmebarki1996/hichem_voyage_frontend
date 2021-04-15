import React, { useEffect } from "react";
import Autocomplete from "react-autocomplete";
const Input = () => {
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
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
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
  var value;
  return (
    <div class="autocomplete" style={{ width: "700px" }}>
      <Autocomplete
        getItemValue={(item) => item.label}
        items={[{ label: "apple" }, { label: "banana" }, { label: "pear" }]}
        renderItem={(item, isHighlighted) => (
          <div
            style={{
              background: isHighlighted ? "lightgray" : "white",
              color: "red",
            }}
          >
            {item.label}
          </div>
        )}
        value={value}
        onChange={(e) => (value = e.target.value)}
        onSelect={(val) => (value = val)}
        inputProps={
          {
            // style: {
            //   width: "100%",
            //   height: "50px",
            //   background: "#f2f5f6",
            //   border: "none",
            //   outline: "none",
            //   paddingLeft: "17px",
            //   //   font-family: oswald, sans-serif;
            //   //   font-size: 14px !important;
            //   //   font-weight: 500 !important;
            //   //   color: #72728c !important;
            // },
            // placeholder: "test",
          }
        }
      />
    </div>
  );
};

export default Input;
