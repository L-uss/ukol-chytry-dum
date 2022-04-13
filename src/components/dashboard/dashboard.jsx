import React from "react";
import Lights from "../lights/lights";
import "./dashboard.css";
import Climate from "../climate/climate";
import Blinds from "../blinds/blinds";
import Energy from "../energy/energy";

const Dashboard = ({ data }) => {
  return (
    <>
      <main className="dashboard">
        <Lights lights={data.lights} />
        <Climate
          temperature={data.climate.temperature}
          humidity={data.climate.humidity}
        />
        <Blinds state={data.blinds} />
        <Energy
          electricity={data.energyConsumption.electricity}
          water={data.energyConsumption.water}
        />
      </main>
    </>
  );
};

export default Dashboard;
