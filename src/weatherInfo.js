import React from "react";
import FormatDate from "./FormatDate";

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
            <div className="clearfix">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
              />
              <div className="float-left" />
              <span className="temp">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C {""}</span>
              <span className="fahrenheit">| ℉</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <ul>Humidity: {props.data.humidity}%</ul>
              <ul>Humidity: 72%</ul>
              <ul>
                Wind: {props.data.wind} {""}km/h
              </ul>
            </ul>
          </div>
        </div>
      </div>
    
    );
  }


 


    