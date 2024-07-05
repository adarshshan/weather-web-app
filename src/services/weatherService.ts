


export const getWeatherData = (infotype: string, searchParams: any) => {
    console.log(process.env.REACT_APP_API_KEY);
    const url: any = new URL(process.env.REACT_APP_BASE_URL! + '/' + infotype)
    url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_API_KEY });
    return fetch(url).then((res) => res.json()).then((data) => data);
}
const formatCurrentWeather = (data: any) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

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
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

const formatForecastWeather = (data: any) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map((d: any) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        };
    });

    hourly = hourly.slice(1, 6).map((d: any) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon,
        };
    });

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams: any) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// const formatToLocalTime = (
//     secs:any,
//     zone:any,
//     format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
const formatToLocalTime = (
    secs: any,
    zone: any,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => '23/02/2000 23:11'

const iconUrlFromCode = (code: any) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };