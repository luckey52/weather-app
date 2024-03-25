import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);
  const tempCel = weather?.main.temp.toFixed(2);
  const tempFahren = ((weather?.main.temp * 9) / 5 + 32).toFixed(2);
  return (
    <div className="weather-box">
      <h1>{weather?.name}</h1>
      <h2>
        {tempCel}ºC/{tempFahren}ºF
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
