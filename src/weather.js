import React, {useState} from "react";
import "./weather.css";
import WeatherInfo from "./weatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState({ ready: false });
  const [ready, setReady] = useState(null);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      iconUrl: "	https://openweathermap.org/img/wn/02d@2x.png",
      wind: response.data.speed,
      city: response.data.name,
    });

    setTemperature(Math.round(response.data.main.temp));
  }


  if (weatherData.ready) {
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
        <WeatherInfo  data={weatherData}/>
</div>
    );
  }

        
   else {
    const apiKey = "e2e5f0664e14425e87abaae94f48d5e8";
    let city = "Paris";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}


 

