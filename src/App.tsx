import React, { useEffect, useState } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData, { getWeatherData } from './services/weatherService';
import Forcast from './components/Forcast';

function App() {
  const [query, setQuery] = useState("Paris");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    await getFormattedWeatherData({ q: query, units: units }).then((data) => {
      setWeather(data);
    })
  }
  useEffect(() => {
    fetchWeather()
  }, [query, units])
  console.log(weather); console.log('this is the weather data')
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br bg-blue-500  h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forcast weather={weather} />
        </>
      )}

    </div>
  );
}

export default App;
