import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const nav =()=>{
return(
    <header>
         <nav>
             <ul>
                <NavLink to='/database' exact className='dat' activeClassName='activist'>Database</NavLink>
                <NavLink to='/stats' exact className='dat' activeClassName='activist'>Statistics</NavLink>
             </ul>
         </nav>

    </header>
);
}
export default nav