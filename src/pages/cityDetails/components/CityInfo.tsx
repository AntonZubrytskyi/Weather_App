import React, {useEffect, useState} from 'react';
import {Box, Typography, Stack} from "@mui/material";
import {useLocation} from "react-router-dom";
import {getCity} from "../../../services/weather.services";
import {convertTemperature} from "../../../utils/helpers/convertTemperature";
import CityInfoItem from "./CityInfoItem";

const CityInfo = () => {
    const initialState = {
        name: '',
        main: {feels_like: 0, temp_min: 0, temp_max: 0},
        weather: [{main: ''}]
    }
    const [cityWeather, setCityWeather] = useState(initialState)
    const {state} = useLocation();
    const {main, weather} = cityWeather;

    useEffect(() => {
        getCity(state).then(data => {
            setCityWeather(data)
        })
    }, [])

    const tempFeelsLike = `${convertTemperature(main.feels_like)} °C`
    const tempMax = `${convertTemperature(main.temp_min)} °C`
    const tempMin = `${convertTemperature(main.temp_max)} °C`

    return (
        <Box
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Typography
                sx={{
                    fontSize: '24px',
                    fontWeight: '700'
                }}
            >
                {cityWeather.name}
            </Typography>
            <CityInfoItem itemName='Temperature feels like:' value={tempFeelsLike}/>
            <CityInfoItem itemName='Temperature min:' value={tempMin}/>
            <CityInfoItem itemName='Temperature max:' value={tempMax}/>
            <CityInfoItem itemName='Sky:' value={weather[0].main}/>
        </Box>
    );
};

export default CityInfo;
