import React,{useState} from "react";

export default function Conversion(props){
const[unit,setUnit]=useState("celsius");

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}
if (units=== `celsius`){

    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>

        <span className="unit">
          <a href="/" onClick={convertToCelsius}> °C</a> {""}| {""}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
} else{
    return "F"
}
}
