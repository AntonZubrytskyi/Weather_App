import React, {useEffect, useState} from 'react';
import {
    Box,
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Typography,
} from '@mui/material';
import {Search} from '@mui/icons-material';
import {storeCity} from "../../../redux/weatherSlice";
import {getCity} from "../../../services/weather.services";
import {cityExists, cityNotFound} from "../../../utils/constants/text-values";
import {useAppSelector} from "../../../utils/hooks/useSelector";
import {useAppDispatch} from "../../../utils/hooks/useDispatch";

const SearchCity = () => {
    const dispatch = useAppDispatch();

    const [searchCity, setSearchCity] = useState('');

    const {cities} = useAppSelector(state => state.weather);

    const [showError, setShowError] = useState({cityNotFound: false, cityExist: false});

    const searchCityCall = () => {
        getCity(searchCity).then(data => {
            const sameCities = cities.some(city => city.id === data.id)
            if (data.cod !== '404' && data.cod !== '400' && !sameCities) {
                dispatch(storeCity(data))
                setShowError({cityExist: false, cityNotFound: false})
                return
            }
            if (sameCities) {
                setShowError({cityExist: true, cityNotFound: false,})
                return
            }
            setShowError({cityExist: false, cityNotFound: true})
        });
    };

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities))
    }, [cities]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setSearchCity(value)
    };

    return (
        <Box>
            <FormControl
                sx={{
                    paddingRight: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: {xs: 1, sm: 1, md: 2},
                    flexDirection: 'row',
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchCityCall()
                    }
                }}
            >
                <InputLabel htmlFor="filled-adornment-password">Add City</InputLabel>
                <FilledInput
                    sx={{
                        backgroundColor: 'inherit',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                        },
                        width: '30%',
                    }}
                    type='text'
                    value={searchCity}
                    onChange={handleSearch}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                onClick={searchCityCall}
                                aria-label="search"
                                edge="start"
                            >
                                <Search/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Typography
                m={2} variant="h6" component="p"
            >
                {showError.cityNotFound && cityNotFound}
                {showError.cityExist && cityExists}
            </Typography>
        </Box>
    );
};

export default SearchCity;
