import React from 'react';
import {Container, Box} from '@mui/material'
import SearchCity from "./components/SearchCity";
import Cities from "./components/Cities";
import {useSelector} from "react-redux";

const CitiesWrapper = () => {
    const {cities} = useSelector((state: any) => state.weather);

    return (
        <Container data-testid="cities-page" maxWidth="xl">
            <Box
                maxWidth="100%"
                flexDirection="column"
                display="flex"
                justifyContent="space-between"
            >
                <SearchCity/>
                {cities.length > 0 && <Cities/>}
            </Box>
        </Container>
    );
};

export default CitiesWrapper;
