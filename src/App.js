import React, { useEffect, useState } from "react";

function App() {
  const [location,setLocation] = useState('')
  const [weather,setWeather] = useState('')
  const [currentDate,setCurrentDate] = useState(new Date())

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=50ed9bb0f99e678bbff93f3cef87d35c&units=metric`

// DATE
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return() => clearInterval(intervalId);
  },[]);

// SEARCH BAR
  const searchLocation = (event) => {
  if (event.key === 'Enter') {
    fetch(url)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });
  };
  };


  return (
 <div className="app">
      <h2>WEATHER INFORMATION DASHBOARD</h2>
      <div className="contain">
        <div className="search">
          <p>{currentDate.toLocaleDateString()}</p>
          <input 
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Search Location" />
        </div>

      {(typeof weather.main != "undefined") ? 
      <div className="subcontain">
          <div className="top">
            <div className="location">
              <h1>{weather.name}</h1>
            </div>
            <div class="country">
              <p>{weather.sys.country}</p>
            </div>
            <div className="temperature">
              <p>{weather.main.temp.toFixed()} °C</p>
            </div>
            <div className="description">
              <p>{weather.weather[0].main}</p>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather_icon"/>
            </div>
          </div>
  
          <div className="bottom">
            <div className="humid">
              <p className="bold">{weather.main.humidity}%</p>
              <p className="para">Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{weather.wind.speed} m/s</p>
              <p className="para">Wind Speed</p>
            </div>
            <div className="feels">
              <p className="bold">{weather.main.feels_like.toFixed()} °C</p>
              <p className="para">Feels Like</p>
            </div>
        </div>
      </div>
      
      : null }
      </div>
  </div>
  );
}

export default App;
