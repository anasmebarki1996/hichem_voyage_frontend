import React from "react";
import moment from "moment";
import "./style.css";
const Text = ({ text, type }) => {
  if (text) {
    if (type === "date") {
      text = new Date(text);
      text = moment(text).format("DD/MM/YYYY");
    } else if (type === "time") {
      text = new Date("January 1, " + text);
      text = moment(text).format("HH:mm");
    } else if (type === "duree") {
      text = new Date("January 1, " + text);
      text = moment(text).format("HH:mm");
      text = text.replace(":", "H") + "min";
    }
  } else text = "-";

  return <span className="textComponent">{text}</span>;
};

export default Text;
