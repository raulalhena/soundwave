import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/discover'>Discover</Link>
        </li>
        <li>
            <Link to='/join'>Join</Link>
        </li>
    </nav>
    )
}
