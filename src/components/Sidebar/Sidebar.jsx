import React from 'react'
import './Sidebar.css'  
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
      <NavLink to="/" exact activeClassName="active">
          <li>Home</li>
        </NavLink>
        <NavLink to="/anime" activeClassName="active">
          <li>Anime</li>
        </NavLink>
        <NavLink to="/manga" activeClassName="active">  
          <li>Manga</li>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/favourites" activeClassName="active">
          <li>Favourites</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
