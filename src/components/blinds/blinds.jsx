import React, { useState } from "react";
import "./blinds.css";
import openBlinds from "./images/blinds-open.svg";
import closeBlinds from "./images/blinds-closed.svg";

const Blinds = (state) => {
  const [blinds, setBlinds] = useState(state);

  const handleClick = (event) => {
    if (event.target.innerText === "Otevřeno") {
      setBlinds("open");
    } else {
      setBlinds("close");
    }
  };
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blinds === "open" ? openBlinds : closeBlinds} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={blinds === "open" ? "button button--active" : "button"}
          onClick={handleClick}>
          Otevřeno
        </button>
        <button
          className={blinds === "open" ? "button" : "button button--active"} 
          onClick={handleClick}>
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
