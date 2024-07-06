import React from 'react'
import { DailyAnHourlyInterface } from '../Interfaces/weatherInterfaces'

interface IForCastItem {
    dayAndHour: DailyAnHourlyInterface
}
const ForCastItem: React.FC<IForCastItem> = ({ dayAndHour }) => {
    return (
        <div>
            <div className="flex items-center justify-center mt-6">
                <p className="font-medium uppercase">Day</p>
            </div>
            <hr className="my-1" />
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-center justify-center'>
                    <p>{dayAndHour.title}</p>
                    <img src={dayAndHour.icon} alt="weather"
                        className='w-32 my-1' />
                    <p className="font-medium">{dayAndHour.temp.toFixed(2)}°</p>
                </div>
            </div>
        </div>
    )
}

export default ForCastItem
