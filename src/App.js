import './App.css';
import React, {useEffect, useState } from 'react';
import WeatherButton from './components/WeatherButton';
import WeatherApp from './components/WeatherApp';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.



function App() {

//   const [weatherData, setWeather] = useState([]);
//   const [cityList, setCity] = useState(['Austin','Dallas','Houston']);
//   const [lastClick, setLastClick] = useState(0);
//   const [inputVal, setInput] = useState('');
//   const [shouldGetWeather, setShould] = useState(true);

//   async function getWeather(city, shouldChangeCity){
//     try{
//       // console.log(city);
//       let url = 'https://geocoding-api.open-meteo.com/v1/search?name='+city.trim().split(' ').join('+')+'&count=10&language=en&format=json';
//       let response = await fetch(url);
//       let json = await response.json();

//       let lat = json.results[0].latitude;
//       let long = json.results[0].longitude;
//       url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=America%2FChicago&forecast_days=1`;
//       response = await fetch(url);
//       json = await response.json();
//       setWeather(json.hourly.temperature_2m);
//       if(shouldChangeCity){
//         let tempCity = [...cityList];
//         tempCity[lastClick] = city;
//         setCity(tempCity);
//       }
//     }
//     catch (err) {
//       window.alert("The city you entered is invalid");
//       console.log(err);
//       // setInput('Search city...');
//     }
//  }

//   function button0(){
//     setLastClick(0);
//     getWeather(cityList[0],false);
//   }

//   function button1(){
//     setLastClick(1);
//     getWeather(cityList[1],false);
//     // setLastClick(1);
//   }

//   function button2(){
//     setLastClick(2);
//     getWeather(cityList[2],false);
//     // setLastClick(2);
//   }

//   const changeCity = (e) => {
//     let tempCity = [...cityList];
//     tempCity[lastClick] = inputVal;
//     console.log("changeCity Called");
    
//     getWeather(inputVal,true);
    
//   }

//   const enterCity = (e) => {
//     setInput(e.target.value);
//     console.log("enterCirtyt Called");
//   }

//   useEffect(() => {
//     if(shouldGetWeather) getWeather(cityList[lastClick],false);
//   })



  return (
    <div className='container'>
      <WeatherApp/>
    </div>
  );
}

export default App;
