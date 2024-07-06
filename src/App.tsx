import React, { useEffect, useState } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData, { getWeatherData } from './services/weatherService';
import Forcast from './components/Forcast';

function App() {
  const [query, setQuery] = useState<any>({ q: "Paris" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    })
  }
  useEffect(() => {
    fetchWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-cyan-300'
    return 'from-yellow-600 to-orange-700';
  }
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
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
