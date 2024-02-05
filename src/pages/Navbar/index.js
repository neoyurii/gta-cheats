import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar(){

    return(
        <div>
            <nav className='nav-container'>
                <NavLink className="btn-link" to="GtaIII">GTA III</NavLink>
                <NavLink className="btn-link" to="GtaVC">GTA Vice City</NavLink>
                <NavLink className="btn-link" to="GtaSA">GTA San Andreas</NavLink>
            </nav>
        </div>
    )
}

export default Navbar