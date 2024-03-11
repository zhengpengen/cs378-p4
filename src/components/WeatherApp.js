// import './App.css';
import React, {useEffect, useState } from 'react';
import WeatherButton from './WeatherButton';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.



const WeatherApp = ({}) => {

  const [weatherData, setWeather] = useState([]);
  const [cityList, setCity] = useState(['Austin','Dallas','Houston']);
  const [lastClick, setLastClick] = useState(0);
  const [inputVal, setInput] = useState('');
  const [isReloaded, setReloaded] = useState(true);

  async function getWeather(city, shouldChangeCity){
    try{
      let url = 'https://geocoding-api.open-meteo.com/v1/search?name='+city.trim().split(' ').join('+')+'&count=10&language=en&format=json';
      let response = await fetch(url);
      let json = await response.json();

      let lat = json.results[0].latitude;
      let long = json.results[0].longitude;
      if(shouldChangeCity){
        let tempCity = [...cityList];
        
        tempCity[lastClick] = json.results[0].name;
        setCity(tempCity);
      }
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=America%2FChicago&forecast_days=1`;
      response = await fetch(url);
      json = await response.json();
      setWeather(json.hourly.temperature_2m);
    }
    catch (err) {
      window.alert("The city you entered is invalid");
      console.log(err);
    }
 }

  function button0(){
    setLastClick(0);
    getWeather(cityList[0],false);
  }

  function button1(){
    setLastClick(1);
    getWeather(cityList[1],false);
  }

  function button2(){
    setLastClick(2);
    getWeather(cityList[2],false);
  }

  const changeCity = (e) => {
    let tempCity = [...cityList];
    tempCity[lastClick] = inputVal;
    getWeather(inputVal,true);
    
  }

  const enterCity = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    if(isReloaded){
        getWeather(cityList[lastClick],false);
        setReloaded(false);
    } 
  })



  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-4'>
          <WeatherButton getWeather={button0} cityName={cityList[0]}/>
        </div>
        <div className='col-4'>
          <WeatherButton getWeather={button1} cityName={cityList[1]}/>
        </div>
        <div className='col-4'>
          <WeatherButton getWeather={button2} cityName={cityList[2]}/>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-8 search'>
          <input type="text" className="search-bar" placeholder="Search City.." onChange={enterCity}/>
        </div>
        <div className='col-2'>
          <button type="submit" class="btn btn-primary weather-button" onClick={changeCity}>+</button>
        </div>
      </div>

      <div className='row mt-3'>
        Weather in {cityList[lastClick]}
      </div>

      <div className='row mt-3'>
        {weatherData.map((item, index) => (
          <div className='row'>
            {index}:00 {parseFloat(item).toPrecision(3)} F
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherApp;
