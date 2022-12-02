import React, {useEffect} from 'react'
import {Box, Card, CardContent, IconButton, Typography} from '@mui/material'
import {CloudSync, Delete} from '@mui/icons-material';
import {getCity} from "../../../services/weather.services";
import {updateCityWeather, deleteCityById} from "../../../redux/weatherSlice";
import {useDispatch} from "react-redux";
import CityCardItem from "./CityCardItem";
import {convertTemperature} from "../../../utils/helpers/convertTemperature";
import {Link} from "react-router-dom";


const CityCard = ({city}: any) => {
    const dispatch = useDispatch();

    const {name, main, wind} = city;

    const temperature = `${convertTemperature(main.temp)} °C`;

    const updateWeather = () => {
        getCity(name).then((data) => {
            dispatch(updateCityWeather(data))
        });
    };
    const deleteCity = () => {
        dispatch(deleteCityById(city.id))
    };
    const routePath = name.toLowerCase()

    useEffect(() => {
        getCity(name).then((data) => {

            dispatch(updateCityWeather(data))
        });
    }, []);
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: '280px',
                flex: ' 1 1 21rem',
                border: '1px solid ',
                display: 'flex',
                margin: 2,
                maxHeight: '400px',
                justifyContent: 'space-between',
                flexDirection: 'column',
                '@media (min-width:1024px)': {
                    maxWidth: '300px',
                    maxHeight: '500px',
                    margin: 3,
                },
                '&:hover': {
                    maxWidth: '305px',
                    maxHeight: '510px',
                    transition: '0.3s',
                    boxShadow: '0px 1px 20px 1px rgba(0,0,0,0.45)',
                },
            }}
        >
            <CardContent
                sx={{
                    fontSize: '12px',
                    display: 'flex',
                    fd: 'column',
                    '@media (min-width:1024px)': {
                        fontSize: '16px',
                    },
                }}
            >
                <Box>
                    <Box
                        display="flex"
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <IconButton
                            onClick={updateWeather}
                            aria-label="update"
                            edge="start"
                        >
                            <CloudSync/>
                        </IconButton>
                        <IconButton
                            onClick={deleteCity}
                            aria-label="delete"
                            edge="end"
                        >
                            <Delete/>
                        </IconButton>
                    </Box>
                    <CityCardItem itemName='City:' value={name}/>
                    <CityCardItem itemName='Humidity:' value={main.humidity}/>
                    <CityCardItem itemName='Wind:' value={wind.speed}/>
                    <CityCardItem itemName='Temperature:' value={temperature}/>
                    <Link
                        aria-label="city"
                        data-testId='cities-details-link'
                        to={`/cities/${routePath}`}
                        state={city.name}
                        style={{
                            textDecoration: 'none',
                        }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                color: '#22BE24',
                                cursor: 'pointer'
                            }}
                            component="p"
                        >
                            Details
                        </Typography>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CityCard
