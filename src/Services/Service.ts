import axios from "axios";
import { DateTime } from 'luxon'
const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;


interface SearchParams {
    [key: string]: any;
}

interface FormattedWeatherData {
    lat: number;
    lon: number;
    name: string
    country: string
}



export const getWeather = async (infotype: string, searchParams: SearchParams) => {
    try {
        const url = `${baseUrl}/${infotype}`;
        const params = { ...searchParams, appid: apiKey };
        const response = await axios.get(url, { params });
        return response.data
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

export const formatCurrentWeather = (data: any) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data
    let format = "cccc,dd LLL yyyy ' | Local time :' hh:mm a"
    const fdt = DateTime.fromSeconds(dt).toLocal().toFormat(format)
    const sFormat = "hh:mm a"
    const fsunrise = DateTime.fromSeconds(sunrise).toLocal().toFormat(sFormat)
    const fsunset = DateTime.fromSeconds(sunset).toLocal().toFormat(sFormat)
    const { main: details, icon } = weather[0];
    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, fdt, country, fsunrise, fsunset, details, icon, speed }
}
export const getFormattedData = async (searchParams: SearchParams) => {
    const currentWeather = await getWeather('weather', searchParams);
    const formattedData: FormattedWeatherData = formatCurrentWeather(currentWeather);
    const { lat, lon } = formattedData;
    const forcastData = await getWeather('forecast', { lat, lon, appid: apiKey, units: searchParams.units })
    const formattedForcastData = formatForcastWeather(forcastData);
    return { ...formattedForcastData, ...formattedData }
}
export const formatForcastWeather = (data: any) => {
    let { list } = data
    let hourly = list.slice(1, 6).map((d: any) => {
        const format = " hh:mm a"
        let localTime = DateTime.fromSeconds(d.dt).toLocal()
        let formattedDateAndTime = localTime.toFormat(format)
        return {
            title: formattedDateAndTime,
            temp: d.main.temp,
            icon: d.weather[0].icon,
        }
    })

    let daily = list.slice(1, 6).map((d: any) => {
        const format = 'cccc'
        let localDay = DateTime.fromSeconds(d.dt).toLocal();
        let formattedLocalDay = localDay.toFormat(format)
        return {
            title: formattedLocalDay,
            temp: d.main.temp,
            icon: d.weather[0].icon,
        }
    })
    return { hourly, daily }
}