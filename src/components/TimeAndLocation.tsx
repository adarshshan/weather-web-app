import React from "react";

interface WeatherInterface {
    dt?: string;
    timezone?: string;
    name?: string;
    country?: string;
}
interface ITimeAndLocation {
    weather?: WeatherInterface
}
const TimeAndLocation: React.FC<ITimeAndLocation | any> = () => {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                    Thursday 31 may, 2024 | Local time: 12:45 pm
                    {/* {formatToLocalTime(dt, timezone)} */}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                {/* <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p> */}
                Berlin, DE
            </div>
        </div>
    );
}

export default TimeAndLocation;
