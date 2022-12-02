import React, {Fragment} from 'react';
import {Paper} from '@mui/material';
import CityCard from "./CityCard";
import {useAppSelector} from "../../../utils/hooks/useSelector";

const Cities = () => {

    const {cities} = useAppSelector(state => state.weather);

    return (
        <Paper
            sx={{
                bgcolor: 'inherit',
                boxShadow: '0px 1px 20px 1px rgba(0,0,0,0.75)',
                padding: '30px',
                margin: '0px 20px',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                flexDirection: 'row',
                '@media (min-width:320px)': {margin: 1, padding: '0px'},
                '@media (min-width:768px)': {margin: 2, padding: 1},
            }}
        >
            {cities.map((city) => {
                return (
                    <Fragment key={city.id}>
                        <CityCard city={city}/>
                    </Fragment>
                )
            })}
        </Paper>
    );
};

export default Cities;
