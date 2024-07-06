import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { FaRegFaceSadTear, FaWind } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import { TbSunset } from "react-icons/tb";
import { WeatherInterface } from '../Interfaces/weatherInterfaces';

interface ITemperatureAndDetails {
    weather: WeatherInterface;
}
const TemperatureAndDetails: React.FC<ITemperatureAndDetails> = ({ weather }) => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{weather.details}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={weather.icon} alt="" className="w-20" />
                <p className="text-5xl">{`${weather.temp.toFixed()}°`}</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <CiTempHigh />
                        Real feel:
                        <span className="font-medium ml-1">{`${weather.feels_like.toFixed()}°`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <FaRegFaceSadTear />
                        Humidity:
                        <span className="font-medium ml-1">{`${weather.humidity.toFixed()}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <FaWind />
                        Wind:
                        <span className="font-medium ml-1">{`${weather.speed.toFixed()} km/h`}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <IoSunnySharp />
                <p className="font-light">
                    Rise:{" "}
                    <span className="font-medium ml-1">
                        {weather.sunrise}
                    </span>
                </p>
                <p className="font-light">|</p>

                <TbSunset />
                <p className="font-light">
                    Set:{" "}
                    <span className="font-medium ml-1">
                    {weather.sunset}
                    </span>
                </p>
                <p className="font-light">|</p>

                <IoSunnySharp />
                <p className="font-light">
                    High:{" "}
                    <span className="font-medium ml-1">{`${weather.temp_max.toFixed(2)}°`}</span>
                </p>
                <p className="font-light">|</p>

                <IoSunnySharp />
                <p className="font-light">
                    Low:{" "}
                    <span className="font-medium ml-1">{`${weather.temp_min.toFixed(2)}°`}</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails
