import React, {useState} from 'react';

const WeatherButton = ({getWeather, cityName}) => {
    return (
        <div className='weather-button-container'>
            <button type="button" onClick={getWeather} class="btn btn-secondary weather-button">{cityName}</button>
        </div>
    )
}

export default WeatherButton