import { WeatherInterface } from "./weatherInterfaces";

export interface ITopButtons {
    setQuery: React.Dispatch<React.SetStateAction<any>>;
}
export interface IForcast {
    weather: WeatherInterface;
}
export interface IInputs {
    setUnits: React.Dispatch<React.SetStateAction<string>>;
    setQuery: React.Dispatch<React.SetStateAction<any>>;

}
export interface ITemperatureAndDetails {
    weather: WeatherInterface;
    units: string;
}
export interface ITimeAndLocation {
    weather: WeatherInterface
}