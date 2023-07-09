import { Toolbar, AppBar, Container, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
        <AppBar component='nav' sx={{ border: '1px solid red', bgcolor: 'white'}}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px'}}>
                <Toolbar sx={{ border: '1px solid blue', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px'}}>
                    <Box>
                        <Link to='/' style={{ border: '1px solid orange', alignItems: 'center' }}>
                            <Typography variant='h5'>
                                <img src="../../../assets/logo.png" alt="Soundwave" />Soundwave
                            </Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Link to='/discover'>
                            Discover
                        </Link>
                        <Link to='/join'>
                            Join
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
