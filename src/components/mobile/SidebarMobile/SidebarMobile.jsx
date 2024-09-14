import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const SidebarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={handleMenuToggle}>
        <MenuIcon />
      </div>
      {menuOpen && (
        <div className="sidebar">
          <ul className="sidebar__list">
            <NavLink to="/" exact activeClassName="active" onClick={handleMenuToggle}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/anime" activeClassName="active" onClick={handleMenuToggle}>
              <li>Anime</li>
            </NavLink>
            <NavLink to="/manga" activeClassName="active" onClick={handleMenuToggle}>
              <li>Manga</li>
            </NavLink>
            <NavLink to="/about" activeClassName="active" onClick={handleMenuToggle}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/favourites" activeClassName="active" onClick={handleMenuToggle}>
              <li>Favourites</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarMobile;