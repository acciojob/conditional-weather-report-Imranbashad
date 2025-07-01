
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./../styles/App.css";

const App = () => {
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
    </div>
  );
};

export default App;
