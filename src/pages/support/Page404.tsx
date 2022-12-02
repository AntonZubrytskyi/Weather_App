import React from 'react';
import {Typography} from "@mui/material";

const Page404 = () => {
    return (
        <Typography
            data-testId='not-found-page'
            sx={{
                fontSize: '28px',
                textAlign: 'center',
                marginTop: '100px'
            }}
        >
            Sorry, the page you visited does not exist.
        </Typography>
    );
};

export default Page404;
