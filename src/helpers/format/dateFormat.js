import moment from "moment";

export const dateFormat = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const calculateDateArrivee = (heureDepart, duree) => {
  heureDepart = new Date("January 1, " + heureDepart);
  return moment(heureDepart).add(duree, "minutes").format("HH:mm");
};
