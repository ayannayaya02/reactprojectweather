import React,{useState} from "react";

export default function Conversion(props){
const[unit,setUnit]=useState("celsius");

function fahrenehit(){
            return (props.celsius * 9) / 5 + 32;

}
function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}
function convertToCelsius(event){
    event.preventDefault();
    setUnit("celisus");
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
            let fahrenheit = (props.celsius * 9) / 5 + 32;

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
}
}
