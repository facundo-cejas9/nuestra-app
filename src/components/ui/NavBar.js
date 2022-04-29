import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className='barra'>
        <nav className='nav'>

        
        <NavLink
                    className="link"
                    to="/"
            >
            
                Inicio 🏘️
           </NavLink>


            <NavLink
                    activeClassName='active'
                    className="link"
                    exact
                    to="/nosotros/"
            >
            
                Fotitos 📷
           </NavLink>


           <NavLink className="link"
                    to="/frases"
            >
            
                Frases 🌺
           </NavLink>

           <NavLink className="link"
                    to="/carta"
            >
            
                Para vos 💌
           </NavLink>

        </nav>
    </div>
    )
}