import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { ReactComponent as SlashLine } from '../../svgs/nav_separator.svg';
import Logo from '../../images/icons/logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="Header">
      <NavLink to="/" className="title">
        <img src={Logo} alt="Logo" className="logo" />
      </NavLink>
      
      <div className="desktop-nav">
        <nav>
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                SEARCH
              </NavLink>
            </li>
            <SlashLine className="nav-separator" />
            <li>
              <NavLink 
                to="/info" 
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                INFORMATION
              </NavLink>
            </li>
            <SlashLine className="nav-separator" />
            <li>
              <NavLink 
                to="/change" 
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                DISCORD
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-nav">
        <button onClick={toggleMenu}>
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {isOpen && (
          <nav>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              SEARCH
            </NavLink>
            <NavLink 
              to="/info" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              INFORMATION
            </NavLink>
            <NavLink 
              to="/change" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              DISCORD
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
