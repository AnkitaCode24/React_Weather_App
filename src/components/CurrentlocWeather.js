import React, { useEffect, useState } from "react";
import "../Styling/CurrentLoc.css";

const CurrentLocWeather = () => {
  const[city, setCity] = useState("")
  const[temp, setTemp]= useState(0)
  const[climate, setClimate] = useState("");
  const[inputcity, setInputcity] = useState("");
 
  const dateBuilder =(d)=>{
    let months= ["january", "febuary", "march", "april", "may", "june", "july", "august",
                  "september","october", "november", "december"];
    let days= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`
  }
 
  function getCoordinates() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  useEffect(() => {
    const fetchApi = async () => {
      const pos = await getCoordinates();
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&&units=metric&appid=b96c9e0a10234e514e7ad84c4f3ac078`;
      const response = await fetch(base);
      const resJson = await response.json();
      console.log(resJson);
      setTemp(resJson.main.temp);
      setCity(resJson.name);
      setClimate(resJson.weather[0].main)  
    };
    fetchApi();
    
  }, []);

  const bycity = async () => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&units=metric&appid=b96c9e0a10234e514e7ad84c4f3ac078`;
    const responsecity = await fetch(base);
    const resJsoncity = await responsecity.json();  
    setInputcity("");
    setCity(resJsoncity.name);
    setTemp(resJsoncity.main.temp);
    setClimate(resJsoncity.weather[0].main) 
    console.log(resJsoncity);
  };

  return (
    <>
    <div className={(temp)>20 ? "app-warm" : "app"}>
      <div id="heading">
        <h1>Weather App</h1>
      </div>
      <div id="Main-container">
        <div className="top">
          <input type="search" value={inputcity} placeholder="search..." id="search-input" required  onChange={(event) => {
                setInputcity(event.target.value);
              }}/>
          <button id="search-button" onClick={bycity}>Search</button>
        </div>

        <div id="App-container">
          <div id="location">
            <h3>{city}</h3>
          </div>
          <div className="date"><h4>{dateBuilder(new Date())}</h4></div>

          <div id="temp-icon"></div>
          <div id="temp">
            <h4>
              <span id="temp-value">{temp} &deg;C</span>
              <span id="temp-unit"></span>
            </h4>
          </div>
          <div id="climate">
            <h5>{climate}</h5>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default CurrentLocWeather;
