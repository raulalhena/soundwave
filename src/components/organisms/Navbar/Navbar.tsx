import { Toolbar, AppBar, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
        <AppBar component='nav' sx={{ border: '1px solid red', bgcolor: 'white'}}>
            <Container >
                <Toolbar>
                    <Link to='/'>
                        <img src="../../../assets/logo.png" alt="Soundwave" />Soundwave
                    </Link>
                    <Link to='/discover'>
                        Discover
                    </Link>
                    <Link to='/join'>
                        Join
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
