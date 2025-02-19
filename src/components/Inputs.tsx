import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IInputs } from '../Interfaces/pageInterfaces';


const Inputs: React.FC<IInputs> = ({ setUnits, setQuery }) => {
    const [city, setCity] = useState("");
    const handleUnitsChange = () => {

    }
    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city });
    }
    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
            })
        }
    }
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Search for city...."
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-full"
                />
                <IoIosSearch
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearchClick}
                />
                <IoLocation
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocationClick}
                />
            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                    name="metric"
                    className="text-xl text-white font-light transition ease-out hover:scale-125"
                    onClick={() => setUnits("metric")}
                >
                    °C
                </button>
                <p className="text-xl text-white mx-1">|</p>
                <button
                    name="imperial"
                    className="text-xl text-white font-light transition ease-out hover:scale-125"
                    onClick={() => setUnits("imperial")}
                >
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs