import React from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData, { getWeatherData } from './services/weatherService';
import Forcast from './components/Forcast';

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'france', units: 'Celsius' });
    // const b=await getWeatherData('weather',{q:'tokyo'});console.log(b);
    console.log('final');
    console.log(data)
  }
  fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br bg-blue-500  h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forcast />
      <Forcast />
      <Forcast />
    </div>
  );
}

export default App;
