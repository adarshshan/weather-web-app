import React from 'react'
import { IForcast } from '../Interfaces/pageInterfaces'
import ForCastItem from './ForCastItem'



const Forcast: React.FC<IForcast> = ({ weather }) => {
    return (
        <div className="flex justify-around p-5">
            <ForCastItem dayAndHour={weather.daily} />
            <ForCastItem dayAndHour={weather.hourly} />
        </div>

    )
}

export default Forcast
