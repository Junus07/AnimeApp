import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footerlogocontainer'>
            <NavLink to="/" className="footerlink" activeClassName="active">
                <img className='footerlogo' src="src/img/logo2.png" alt="" />
            </NavLink>
                <h1>AnimeApp</h1>
            </div>
        <ul className='footerlist'>
            <NavLink to="/" className="footerlink" activeClassName="active">
                <li>Home</li>
            </NavLink>
            <NavLink to="/anime" className="footerlink" activeClassName="active">
                <li>Anime</li>
            </NavLink>
            <NavLink to="/manga" className="footerlink" activeClassName="active">  
                <li>Manga</li>
            </NavLink>
            <NavLink to="/about" className="footerlink" activeClassName="active">
                <li>About Us</li>
            </NavLink>
        </ul>
    </div>
    <div className='copyrightcontainer'>
        <p className='copyright'>Copyright &copy; 2022. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer