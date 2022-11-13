import React from 'react';
import "./Weather.css"
export default function Weather (){
    return (
        <div className='weather'>

            <form>
                <div className='row'>
<div className='col-9'>
<input type="search"
placeholder='Enter a city...'
className='searchInput'
/>
</div>
<div className='col-3'>
<input type="submit"
value="Search"
className='button'
/>
</div>
                </div>
            </form>

            <div className='main'>

            <div className='row'>
               
               
                <div className='col-4 d-flex flex-direction-column justify-content-start align-items-center text-center'>
                <p className='info'>Clouds</p>
            <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' width='100px'/>
            
            </div>
            <div className='col-4 text-center'>
            <h2> <span className='bold temp'>6</span>°C</h2>
            </div>
          
         
            <div className='col-4 d-flex justify-content-evenly align-items-center'>
                    <div>
            <h1>Kyiv</h1>
            <p>Wednesday 7:00</p></div>
       
                </div>
                
            </div>

            <div className='row'>
              
            <div className='weather_description mt-5'>
            <ul>
              <li>
                Pressure
                 <p className='bold pt-2'>1030 </p> 
              </li>
              <li>
                Humidity: 
               <p className='bold pt-2'> 91%</p> 
                </li>
                <li>
                Wind: km/h
                <p className='bold pt-2'> 2km/h</p> 
                </li>
            </ul>
            </div>
</div>
            </div>
        </div>
    )
}