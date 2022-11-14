import React, {useState} from 'react';
import axios from "axios"
import "./Weather.css"


export default function Weather (props){
    
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response){
        console.log (response.data);
        setWeatherData( {
            ready: true,
            temperature: response.data.main.temp,
            date: 'Wednesday 7:00',
            city: response.data.name,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    })
       
    }
    if(weatherData.ready){
        return (
            <div className='weather'>
    
                <form>
                    <div className='row'>
    <div className='col-10'>
    <input type="search"
    placeholder='Enter a city...'
    className='searchInput'
    />
    </div>
    <div className='col-2'>
    <input type="submit"
    value= 'search'
    className='button'
    />
    </div>
                    </div>
                </form>
    
                <div className='main'>
    
                <div className='row'>
                   
                   
                    <div className='col-4 d-flex flex-direction-column justify-content-start align-items-center text-center'>
                    <p className='info text-capitalize'>{weatherData.description}</p>
                <img src={weatherData.iconUrl} alt={weatherData.description} width='100px'/>
                
                </div>
                <div className='col-4 '>
                <h2 className=' temp'>{Math.round(weatherData.temperature)} <span  className='small'> °C | °F</span></h2>
                </div>
              
             
                <div className='col-4 d-flex justify-content-evenly align-items-center'>
                        <div>
                <h1>{weatherData.city}</h1>
                <p>{weatherData.date}</p></div>
           
                    </div>
                    
                </div>
    
                <div className='row'>
                  
                <div className='weather_description mt-5'>
                <ul>
                  <li>
                    Pressure
                     <p className='bold pt-2'> {weatherData.pressure} </p> 
                  </li>
                  <li>
                    Humidity: 
                   <p className='bold pt-2'> {weatherData.humidity}%</p> 
                    </li>
                    <li>
                    Wind: km/h
                    <p className='bold pt-2'> {weatherData.wind}km/h</p> 
                    </li>
                </ul>
                </div>
    </div>
                </div>
            </div>
        )
    }
    else {
    let city = 'Kyiv';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=09d7fe078a1bda5730bd116188593f4a&units=metric`
    
    axios.get(apiUrl).then(handleResponse)
    return "Loading..."
    }
}