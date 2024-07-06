import { DateTime } from "luxon";

export const getWeatherData = (infotype: string, searchParams: any): Promise<any> => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParams.q}&appid=${process.env.REACT_APP_API_KEY!}`;
    // console.log(url);
    const url: any = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${searchParams.q}`);
    url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_API_KEY! });

    return fetch(url.toString())
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json().then((data) => data);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        });
}

const formatToLocalTime = (secs: number, zone: string, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconUrlFromCode = (code: string) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatCurrentWeather = (data: any) => {
    console.log(data); console.log('this issssss')
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone
    } = data;

    const { main: details, icon } = weather[0];
    const formatedLocalTime = formatToLocalTime(dt, timezone);

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        timezone,
        country,
        sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm:a'),
        sunset: formatToLocalTime(sunset, timezone, 'hh:mm:a'),
        details,
        icon: iconUrlFromCode(icon),
        speed,
        formatedLocalTime
    };
};

const formatForecastWeather = (secs: any, offset: any, data: any) => {
    console.log(data); console.log('this is the dataaaa')

    const daily = {
        title: formatToLocalTime(data.dt, offset, "ccc"),
        temp: data.main.temp,
        icon: iconUrlFromCode(data.weather[0].icon),
    }

    const hourly = {
        title: formatToLocalTime(data.dt, offset, "hh:mm a"),
        temp: data.main.temp,
        icon: iconUrlFromCode(data.weather[0].icon),
        data: data.dt.txt,
    }

    return { hourly,daily };
};

const getFormattedWeatherData = async (searchParams: any) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather);
    console.log(formattedCurrentWeather); console.log('from here');

    const { dt, lat, lon, timezone } = formattedCurrentWeather;

    const formatedForcastedWeather = await getWeatherData("forecast", {
        lat,
        lon,
        units: searchParams.units,
    }).then((d) => formatForecastWeather(dt, timezone, d))


    return { ...formattedCurrentWeather, ...formatedForcastedWeather };
};



export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
