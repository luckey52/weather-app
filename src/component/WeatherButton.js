import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  console.log("cities?", cities);

  return (
    <div>
      <Button
        variant={`${setCity == null ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant={`${setCity == null ? "outline-warning" : "warning"}`}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
