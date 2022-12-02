import React from 'react';
import {Box, Typography} from "@mui/material";

interface CityInfoItem {
    itemName?: string;
    value: string;
}

const CityInfoItem = ({itemName, value}: CityInfoItem) => {
    return (
        <Box
            display="flex"
            gap="10px"
            alignItems='center'
        >
            <Typography
                fontSize={{xs: '1.7em', sm: '1.2em'}}
                fontWeight={400}
            >
                {itemName}
            </Typography>
            <Typography
                fontSize={{xs: '1.7em', sm: '1.5em'}}
                fontWeight={400}
            >
                {value}
            </Typography>
        </Box>
    );
};

export default CityInfoItem;
