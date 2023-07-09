import React from "react";
import Weather from "./weather";
import logo from "./logo.svg";
import "./App.css";

export default function App () {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <Weather />
        <footer>
          Coded by{" "}
          <a href="#" target="_blank">
            Ayanna Fofana
          </a>{" "}
          and is {""} <a href="">Open-Source-Code</a> on Github
        </footer>
      </div>
    </div>
  );
}
