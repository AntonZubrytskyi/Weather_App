import {Paper, Toolbar, Typography} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import {Box, Container} from '@mui/system'
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <AppBar position="static" sx={{background: 'inherit'}}>
                <Paper>
                    <Container
                        maxWidth="xl">
                        <Toolbar
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                height: '115px',
                            }}
                        >
                            <Link
                                data-testid='cities-link'
                                to='/'
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Typography
                                    sx={{
                                        flex: 2,
                                        color: '#22BE24',
                                    }}
                                    component="h2"
                                    variant="h4"
                                >
                                    Weather App
                                </Typography>
                            </Link>
                            <Box
                                sx={{
                                    flex: 4,
                                    justifyContent: 'space-between',
                                    display: {xs: 'none', md: 'flex'},
                                }}
                            >
                            </Box>
                        </Toolbar>
                    </Container>
                </Paper>
            </AppBar>
        </>
    )
}

export default Navbar
