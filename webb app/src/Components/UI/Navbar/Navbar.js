import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logofile from '../Logo/logo'
const nav =()=>{
return(
    <header>
         <nav>
         <Logofile className='logo' />

             <ul>
                <NavLink to='/database' exact className='dat' activeClassName='activist'>Database</NavLink>
                <NavLink to='/stats' exact className='dat' activeClassName='activist'>Statistics</NavLink>
                <NavLink to='/findit' exact className='dat' activeClassName='activist'>Quick Find</NavLink>

             </ul>

         </nav>

    </header>
);
}
export default nav