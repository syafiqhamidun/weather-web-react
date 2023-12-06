import React from "react";
// eslint-disable-next-line
import axios from "axios";

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=Klang&appid=50ed9bb0f99e678bbff93f3cef87d35c&units=metric`

  return (
 <div className="app">
      <div className="container">

        <div className="top">
          <div className="location">
            <h2>Klang</h2>
          </div>
          <div className="temperature">
            <h1>32°C</h1>
          </div>
          <div className="description">
            Clouds
          </div>
        </div>
  
        <div className="bottom">
          <div className="feels">
            <p>32°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12MPH
          </div>
        </div>


      </div>
  </div>
  );
}

export default App;
