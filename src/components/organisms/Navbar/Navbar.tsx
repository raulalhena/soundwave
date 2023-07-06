import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/discover'>Discover</Link>
            </li>
            <li>
                <Link to='/join'>Join</Link>
            </li>
        </ul>
    </nav>
  )
}
