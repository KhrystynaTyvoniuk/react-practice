import React from 'react';
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props){
    return (
        <div className='WeatherInfo'>
        <div className='main'>
    
                <div className='row'>
                   
                   
                    <div className='col-4 d-flex flex-direction-column justify-content-start align-items-center text-center'>
                    <p className='info text-capitalize'>{props.data.description}</p>
                <img src={props.data.iconUrl} alt={props.data.description} width='100px'/>
                
                </div>
                <div className='col-4 '>
                <h2 className=' temp'>{Math.round(props.data.temperature)} <span  className='small'> °C | °F</span></h2>
                </div>
              
             
                <div className='col-4 d-flex justify-content-evenly align-items-center'>
                        <div>
                <h1>{props.data.city}</h1>
                <p><FormattedDate date={props.data.date} /></p></div>
           
                    </div>
                    
                </div>
    
                <div className='row'>
                  
                <div className='weather_description mt-5'>
                <ul>
                  <li>
                    Pressure
                     <p className='bold pt-2'> {props.data.pressure} </p> 
                  </li>
                  <li>
                    Humidity: 
                   <p className='bold pt-2'> {props.data.humidity}%</p> 
                    </li>
                    <li>
                    Wind: km/h
                    <p className='bold pt-2'> {props.data.wind}km/h</p> 
                    </li>
                </ul>
                </div>
    </div>
                </div>
            </div>
           
    );
}