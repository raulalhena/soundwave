import { Toolbar, AppBar, Container, Typography, Box } from '@mui/material'
import { styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStykes } from '@mui/material/core'


const AppBarSx = {
    border: '1px solid purple',
    bgcolor: 'white',
    display: 'flex'
}

const containerSx = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '0px',
    width: '100%'
}

const MenuLinks = styled(Box)(() => ({
    fontSize: '25px',
    display: 'flex',
    gap: '10px'
}))

const LogoTypography = styled(Typography)(() => ({
    display: 'inline-flex',
    gap: '10px',
    fontSize:'30px',
    border: '1px solid orange', 
    alignItems: 'center', 
    width: '100%' 
}))


export const Navbar = () => {
  return (
        <AppBar  component='nav' sx={AppBarSx}>
            <Container sx={containerSx}>
                <Toolbar sx={{ border: '1px solid blue', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px'}}>
                    <Box>
                        <Link to='/'>
                            <LogoTypography variant='h5'>
                                <img src="../../../assets/logo.png" alt="Soundwave" />Soundwave
                            </LogoTypography>
                        </Link>
                    </Box>
                    <MenuLinks>
                        <Link to='/discover'>
                            Discover
                        </Link>
                        <Link to='/join'>
                            Join
                        </Link>
                    </MenuLinks>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
