import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="weather-buttons">
      <Button
        variant={`${selectedCity === null ? "outline-warning" : "warning"}`}
        onClick={() => {
          handleCityChange("current");
        }}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant={`${selectedCity === item ? "outline-warning" : "warning"}`}
          onClick={() => {
            handleCityChange(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
