import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { ReactComponent as SlashLine } from '../../svgs/nav_separator.svg';
import Logo from '../../images/icons/Asset_4.webp'
import { ReactComponent as Menu } from '../../svgs/codicon--menu.svg';

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
          <ul className='desktop-nav-ul'>
            <li className='desktop-nav-li'>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                SEARCH
              </NavLink>
            </li>
            <SlashLine className="nav-separator" />
            <li className='desktop-nav-li'>
              <NavLink
                to="/info"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                INFORMATION
              </NavLink>
            </li>
            <SlashLine className="nav-separator" />
            <li className='desktop-nav-li'>
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                SETTINGS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-nav">
        <Menu
          className={`burger-icon ${isOpen ? 'burger-open' : ''}`}
          onClick={toggleMenu}
          title="Menu"
        />
        {isOpen && (
          <nav className='overlay-menu'>
            <ul className='mobile-nav-ul'>
              <li className='mobile-nav-li'>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  SEARCH
                </NavLink>
              </li>
              <li className='mobile-nav-li'>
                <NavLink
                  to="/info"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  INFORMATION
                </NavLink>
              </li>
              <li className='mobile-nav-li'>
                <NavLink
                  to="/settings"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  SETTINGS
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
