import {WEATHER_API_URL, WEATHER_API_KEY} from "./config";
import axios from 'axios';

const getCity = async (location: string) => {
    try {
        const paramStr = `?q=${location}&units=imperial&appid=${WEATHER_API_KEY}`;
        const response = await axios.get(`${WEATHER_API_URL}${paramStr}`);
        const data = await response.data;
        return data;
    } catch (error: any) {
        return error.response.data;
    }
};

export {
    getCity
};

