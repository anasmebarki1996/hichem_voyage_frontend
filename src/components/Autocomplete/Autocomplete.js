import React, { useState, useEffect } from "react";
import "./style.css";
const Autocomplete = (props) => {
  const {
    id,
    name,
    value,
    onChange,
    placeholder,
    list,
    className,
    required,
  } = props;

  return (
    <>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        list="browsers"
        required={required}
      />
      <datalist id="browsers" className="autocomplete_list_items">
        {list.map((item) => {
          return <option value={item} key={item} />;
        })}
      </datalist>
    </>
  );
};

export default Autocomplete;
