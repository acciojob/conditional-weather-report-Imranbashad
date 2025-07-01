import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  const tempColor = temperature > 20 ? "red" : "blue";

  return (
    <>
      <p>
        Temperature: <span style={{ color: tempColor }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </>
  );
};

export default WeatherDisplay;
