import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div className="weather-buttons">
      <Button
        variant={`${setCity == null ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant={`${setCity == item ? "outline-warning" : "warning"}`}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
