import React from 'react';
import {Container, Stack,} from "@mui/material";
import CityInfo from "./components/CityInfo";

const CityDetails = () => {

    return (
        <Container data-testid="cities-details-page">
            <Stack
                p={{xs: '20px 15px', sm: '30px', md: '30px'}}
                display='flex'
                alignItems='center'
                justifyContent='center'
                height={{xs: '90vh', sm: '90vh', lg: '70vh'}}
            >
                <CityInfo/>
            </Stack>
        </Container>
    );
};

export default CityDetails;
