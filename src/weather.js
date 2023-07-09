import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              autoFocus="on"
              placeholder="Search City..."
              className="form"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <ul className="list">
        <h1>Paris</h1>

        <ul>Wednesday 07:00</ul>
        <ul>Partly Cloudy</ul>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://openweathermap.org/img/wn/02d@2x.png"
              alt="Partly Cloudy"
            />
            <div className="float-left" />
            <span className="temp">6</span>
            <span className="unit">°C {""}</span>
            <span className="fahrenheit">| ℉</span>
          </div>
        </div>
        <ul>
          <ul>Percipitation: 15%</ul>
          <ul>Humidity: 72%</ul>
          <ul>Wind: 13km/h</ul>
        </ul>
      </div>
    </div>
  );
}
