import React from "react";
import "./lights.css";
import Light from "../light/light";

const Lights = ({ lights }) => {
  return (
    <>
      {lights.map((light) => (
        <Light key={light.name} name={light.name} state={light.state} />
      ))}
    </>
  );
};

export default Lights;
