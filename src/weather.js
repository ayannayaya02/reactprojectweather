import React from "react";
import "./weather.css";

export default function Weather(){
return (
  <div className="weather">
    <form>
        <div className="row">
            <div className="col-9">
  <input type="Search" placeholder="Search City..." className="form" />
  </div>
              <div className="col-3">

          <input type="submit" value="Search" className="btn btn-primary" />
   </div>
   </div>
    </form>
    <h1>Paris</h1>

    <ul>
      <li>Wednesday 07:00</li>
      <li>Partly Cloudy</li>
    </ul>
    <div className="row">
      <div className="col-6">
        <img
          src="https://openweathermap.org/img/wn/02d@2x.png"
          alt="Partly Cloudy"
        />
        6 °C
      <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
        </div>
        </div>
        </div>
);
}