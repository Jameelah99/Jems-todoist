import React from 'react'
import {Link} from "react-router-dom"

const HeaderLinks = () => {
  return (
    <nav className='header-links-container'>
        <ul>
            <li>
        <Link to="/" className='header-links'>Home</Link>
        
        <Link to="/contact" className='header-links'>Contact</Link>

            </li>
        </ul>
    </nav>
  )
}

export default HeaderLinks