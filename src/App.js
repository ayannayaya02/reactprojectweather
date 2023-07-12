import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <Weather defaultCity="Paris" />
        <footer>
          Coded by{" "}
          <p href="#" target="_blank">
            Ayanna Fofana
          </p>{" "}
          and is{" "}
          <a href="https://github.com/ayannayaya02/reactprojectweather">
            Open-Source-Code
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
