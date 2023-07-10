import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./weatherIcon";
import Conversion from "./conversion";

 export default function WeatherInfo (props){
    return (
<div className="weatherInfo">
        <ul className="list">
          <h1>{props.data.city}</h1>

          <ul>
            <FormatDate date={props.data.date} />
          </ul>
          <ul className="text-capitalize">{props.data.description}</ul>
        </ul>

        <div className="row">
          <div className="col-6">
                <div className="d-flex">
                    <div>
                <WeatherIcon code={props.data.icon} size={52}/>
</div>

              <div className="weatherTemperature">
              <Conversion celsius={props.data.temperature}/>
              </div>
              </div>
              </div>
          <div className="row">
          <div className="col-6">
            <ul>
              <ul>Humidity: {props.data.humidity}%</ul>
              <ul>
                Wind: {props.data.speed} {""}km/h
              </ul>
            </ul>
</div>
</div>
</div>
</div>
    );
  }


 


    