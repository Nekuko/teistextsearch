import { NavLink } from 'react-router-dom';
import './Header.css';
import { ReactComponent as SlashLine } from '../../svgs/nav_separator.svg';
import Logo from '../../images/logo.png'

function Header() {
  return (
    <header className="Header">
      <NavLink to="/" className="title">
      <img src={Logo} alt="Logo" className="logo" /> {/* Apply the logo class */}
      </NavLink>
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
              to="/how-to" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              HOW TO USE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
