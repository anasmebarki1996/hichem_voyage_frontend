import React from "react";
import { BiTaxi, BiBus, BiTrain } from "react-icons/bi";
import { IoAirplaneOutline } from "react-icons/io5";

const MoyenTransport = ({ moyen_transport }) => {
  if (moyen_transport === "taxi") return <BiTaxi size={20} />;
  else if (moyen_transport === "bus") return <BiBus />;
  else if (moyen_transport === "train") return <BiTrain />;
  else <IoAirplaneOutline />;
};

export default MoyenTransport;
