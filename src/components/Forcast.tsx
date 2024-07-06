import React from 'react'
import { WeatherInterface } from '../Interfaces/weatherInterfaces'


interface IForcast {
    weather: WeatherInterface;
}
const Forcast: React.FC<IForcast> = ({ weather }) => {
    return (
        <div className="flex justify-around p-5">
            <div>
                <div className="flex items-center justify-center mt-6">
                    <p className="font-medium uppercase">Day</p>
                </div>
                <hr className="my-1" />
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-center justify-center'>
                        <p>{weather.daily.title}</p>
                        <img src={weather.icon} alt="weather"
                            className='w-32 my-1' />
                        <p className="font-medium">{weather.temp.toFixed(2)}°</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-center mt-6">
                    <p className="font-medium uppercase text-center">Hour</p>
                </div>
                <hr className="my-1" />
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-center justify-center'>
                        <p>{weather.hourly.title}</p>
                        <img src={weather.hourly.icon} alt="weather"
                            className='w-32 my-1' />
                        <p className="font-medium">{weather.temp.toFixed(2)}°</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Forcast
