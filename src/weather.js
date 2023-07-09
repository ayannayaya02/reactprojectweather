import React from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
    const apiKey = "e2e5f0664e14425e87abaae94f48d5e8";
    let city="Paris";
    const apiUrl =
      `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);


      function handleResponse(response){
        console.log(response.data);
      }
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
