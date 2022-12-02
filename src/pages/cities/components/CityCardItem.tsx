import React from 'react';
import {Box, Typography} from "@mui/material";

interface CityCardItemProps {
    itemName: string;
    value: string | number;
}

const CityCardItem = ({itemName, value}: CityCardItemProps) => {
    return (
        <Box
            display="flex"
            gap="10px"
            alignItems='baseline'
        >
            <Typography
                letterSpacing="2px"
                fontWeight="600"
                component="p"
                fontSize='24px'
            >
                {itemName}
            </Typography>
            <Typography
                letterSpacing="2px"
                fontWeight="500"
                component="p"
                fontSize='18px'
            >
                {value}
            </Typography>
        </Box>
    );
};

export default CityCardItem;
