export interface DailyAnHourlyInterface {
    title: string;
    temp: number;
    icon: string;
}
export interface WeatherInterface {
    name: string;
    country?: string;
    daily: DailyAnHourlyInterface;
    details: string;
    dt: number;
    feels_like: number;
    formatedLocalTime: string;
    hourly: DailyAnHourlyInterface;
    humidity: number;
    icon: string;
    lat: number;
    lon: number;
    speed: number;
    sunrise: string;
    sunset: string;
    temp: number;
    temp_max: number;
    temp_min: number;
    timezone: number;
}