import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Input = (props) => {
  const {
    type,
    id,
    name,
    value,
    error,
    onChange,
    onBlur,
    placeholder,
    list,
    className,
    data,
    required,
  } = props;

  let classNameFinal = className;
  if (error) classNameFinal = classNameFinal.concat(" is-invalid");
  if (type === "autoComplete") {
    return (
      <div className="form-group w-100">
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={classNameFinal}
          list="browsers"
          required={required}
        />
        <div className="invalid-feedback">{error}</div>
        <datalist id="browsers" className="autocomplete_list_items">
          {list.map((item) => {
            return <option value={item.name} key={item.code} />;
          })}
        </datalist>
      </div>
    );
  } else if (type === "date") {
    return (
      <div className="form-group w-100">
        <input
          type="date"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={classNameFinal}
          list="browsers"
          required={required}
        />
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="form-group w-100">
        <select
          name="moyen_transport"
          id="moyen_transport"
          className={classNameFinal}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        >
          <option value="" disabled selected={value == ""}>
            {placeholder}
          </option>
          {data.map((item) => {
            return (
              <option
                value={item.value}
                key={item.value}
                selected={value == item.value}
              >
                {item.text}
              </option>
            );
          })}
        </select>
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  } else {
    return (
      <div className="form-group w-100">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={classNameFinal}
          required={required}
        />
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  }
};

export default Input;
