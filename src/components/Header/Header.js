import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { ReactComponent as SlashLine } from '../../svgs/nav_separator.svg';
import Logo from '../../images/icons/Asset_4.webp'
import { ReactComponent as Menu } from '../../svgs/codicon--menu.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Ignore clicks on the checkbox
        if (event.target.type !== 'checkbox') {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
                to="/media"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                MEDIA
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

      <div className="mobile-nav" ref={menuRef}>
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
                  onClick={toggleMenu}
                  to="/"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  SEARCH
                </NavLink>
              </li>
              <li className='mobile-nav-li'>
                <NavLink
                  onClick={toggleMenu}
                  to="/media"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  MEDIA
                </NavLink>
              </li>
              <li className='mobile-nav-li'>
                <NavLink
                  onClick={toggleMenu}
                  to="/info"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  INFORMATION
                </NavLink>
              </li>
              <li className='mobile-nav-li'>
                <NavLink
                  onClick={toggleMenu}
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
