import React from "react";

interface ITopButtons {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const TopButtons: React.FC<ITopButtons> = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "Sydney",
        },
        {
            id: 3,
            title: "Tokyo",
        },
        {
            id: 4,
            title: "Toronto",
        },
        {
            id: 5,
            title: "Paris",
        },
    ];

    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="text-white text-lg font-medium"
                    onClick={() => setQuery(city.title)} >
                    {city.title}
                </button>
            ))}

        </div>
    );
}

export default TopButtons;
