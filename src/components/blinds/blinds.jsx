import React, { useState } from "react";
import "./blinds.css";
import openBlinds from "./images/blinds-open.svg";
import closeBlinds from "./images/blinds-closed.svg";

const Blinds = ({state}) => {
  
  const [blinds, setBlinds] = useState(state);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blinds === "open" ? openBlinds : closeBlinds}
             alt={blinds === "open" ? 'Roztažené žaluzie' : 'Zatáhlé žaluzie'}/>
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={blinds === "open" ? "button button--active" : "button"}
          onClick={() => {
            setBlinds('open')
          }}>
          Otevřeno
        </button>
        <button
          className={blinds === "open" ? "button" : "button button--active"} 
          onClick={() => {
            setBlinds('close')
          }}>
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
