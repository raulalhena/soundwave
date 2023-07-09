import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Container>
         <nav>
            <li>
                <Link to='/'><img src="../../../assets/logo.png" alt="Soundwave" /></Link>
            </li>
            <li>
                <Link to='/discover'>Discover</Link>
            </li>
            <li>
                <Link to='/join'>Join</Link>
            </li>
        </nav>
    </Container>
    )
}
