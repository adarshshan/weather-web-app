import React from "react";
import { WeatherInterface } from "../Interfaces/weatherInterfaces";

interface ITimeAndLocation {
    weather: WeatherInterface
}
const TimeAndLocation: React.FC<ITimeAndLocation> = ({weather}) => {
    console.log(weather);console.log('from the component');
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                    {weather.formatedLocalTime}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">{`${weather.name}, ${weather.country}`}</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
