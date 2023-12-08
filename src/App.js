import React, { useEffect, useState } from "react";

function App() {
  const [location,setLocation] = useState('')
  const [weather,setWeather] = useState('')
  const [currentDate,setCurrentDate] = useState(new Date())

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=50ed9bb0f99e678bbff93f3cef87d35c&units=metric`

/** DATE : setup the current date
 * "useEffect" is used to access the count state variable right from the effect
 * "setCurrentDate" is interval setup to updates the date state every 1000 millisecond
 * "clearInterval" is cleanup function to preventing memory leaks
 */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date()); 
    }, 1000); //1000 millisecond unit
    return() => clearInterval(intervalId);
  },[]);

/** SEARCH BAR : used to search the city and display the result
 */ 
  const searchLocation = (event) => {
  if (event.key === 'Enter') {  //Check if the pressed key is the "Enter" key
    fetch(url) //Fetch API from the URL
    .then((res) => res.json()) //Determine the response body as JSON
    .then((result) => {
      setWeather(result); 
    });
  }
  
  };

  return (
 <div className="app">
      <h2>WEATHER INFORMATION DASHBOARD</h2>
      <div className="contain">
        <div className="search">
          <p>{currentDate.toLocaleDateString()}</p>

          {/* onKeyPress is keyboard event in JS that triggered when a key is pressed */}
          <input 
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Search Location" />
        </div>

      {/* Render weather information when 'main' property is defined */}
      {(typeof weather.main != "undefined") ? (

      // Divide display into two sections for better infographic
      <div className="subcontain">

          {/* TOP */}
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
  
          {/* BOTTOM */}
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
      
      // Expression if false
      ) : ( null )}
      </div>
  </div>
  );
}

export default App;
