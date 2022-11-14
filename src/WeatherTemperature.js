import React, { useState } from "react";


export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celcius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCelcius(event){
        event.preventDefault();
        setUnit("celcius")
    }
    function fahrenheit(){
        return (props.celcius * 9) / 5 + 32;
    }
    if (unit === "celcius"){
        return (
            <div className="WeatherTemperature">
              <h2 className=' temp'>{Math.round(props.celcius)} 
              <span  className='small'> 
              °C | <a href="/" onClick={convertToFahrenheit}>°F</a> 
              </span>
              </h2>
            </div>
          );
    } else {
        return (
            <div className="WeatherTemperature">
              <h2 className=' temp'>{Math.round(fahrenheit())} 
              <span  className='small'> 
              <a href="/" onClick={convertToCelcius}>°C</a>{" "} | °F
              </span>
              </h2>
            </div>
          );
    }
    
}