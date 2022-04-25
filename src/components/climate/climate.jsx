import React, { useState } from "react";
import "./climate.css";
import temp from "./image/temp.svg";

const Climate = ({ temperature, humidity }) => {
  const [newTemperature, setTemperature] = useState(temperature);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature"> {newTemperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button onClick={() => setTemperature(newTemperature + 1)} disabled={newTemperature ===30} className="button">
          +
        </button>
        <button onClick={() => setTemperature(newTemperature - 1)} disabled={newTemperature === 0} className="button">
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
