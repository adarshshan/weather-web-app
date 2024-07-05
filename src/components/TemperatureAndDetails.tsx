import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { FaRegFaceSadTear, FaWind } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import { TbSunset } from "react-icons/tb";

interface ITemperatureAndDetails {

}
const TemperatureAndDetails: React.FC<ITemperatureAndDetails> = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>something will be here</p>
                {/* <p>{details}</p> */}
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="" className="w-20" />
                <p className="text-5xl">{`19°`}</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <CiTempHigh />
                        Real fell:
                        <span className="font-medium ml-1">{`30°`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <FaRegFaceSadTear />
                        Humidity:
                        <span className="font-medium ml-1">{`30%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <FaWind />
                        Wind:
                        <span className="font-medium ml-1">{`5 km/h`}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <IoSunnySharp />
                <p className="font-light">
                    Rise:{" "}
                    <span className="font-medium ml-1">
                        23/22/2303
                        {/* {formatToLocalTime(sunrise, timezone, "hh:mm a")} */}
                    </span>
                </p>
                <p className="font-light">|</p>

                <TbSunset />
                <p className="font-light">
                    Set:{" "}
                    <span className="font-medium ml-1">
                        23/22/2303
                        {/* {formatToLocalTime(sunset, timezone, "hh:mm a")} */}
                    </span>
                </p>
                <p className="font-light">|</p>

                <IoSunnySharp />
                <p className="font-light">
                    High:{" "}
                    <span className="font-medium ml-1">{`33°`}</span>
                </p>
                <p className="font-light">|</p>

                <IoSunnySharp />
                <p className="font-light">
                    Low:{" "}
                    <span className="font-medium ml-1">{`54°`}</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails
