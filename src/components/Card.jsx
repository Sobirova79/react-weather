import React from "react";
import temp from "../images/temp.svg";
import Info from "./Info";
import humidity from "../images/humidity.svg";
import pressure from "../images/pressure.svg";
import wind from "../images/wind.svg";

function Card({ current }) {
  return (
    <div className="card">
      <Info
        icon={temp}
        text="Temperatura"
        state={`${Math.round(current.temp)}° - feels like ${Math.round(
          current.feels_like
        )}°`}
      />
      <Info
        icon={pressure}
        text="Pressure"
        state={`${current.pressure} mm press`}
      />
      <Info icon={humidity} text="Humidity" state={`${current.humidity} %`} />
      <Info
        icon={wind}
        text="Wind"
        state={`${Math.round(current.wind_speed)} m/s`}
      />
    </div>
  );
}

export default Card;
