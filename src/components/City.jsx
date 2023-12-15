import React, { useContext } from "react";
import { getTemp, getTime } from "../helpers";
import { Context } from "../context/context";
function City({ current }) {
  const { region } = useContext(Context);
  return (
    <div className="city">
      <div className="city__top">
        <div className="city__temp">
          <p className="city__degree">{getTemp(current.temp)}</p>
          <p className="city__day">Today</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt="state"
          className="city__icon"
        />
      </div>
      <div className="city__bottom">
        <p className="city__text">
          Time: <span>{getTime(current.dt)}</span>
        </p>
        <p className="city__text">
          City: <span>{region}</span>
        </p>
      </div>
    </div>
  );
}

export default City;
