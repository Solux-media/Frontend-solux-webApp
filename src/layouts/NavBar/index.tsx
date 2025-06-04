import { NavLink, useLocation } from 'react-router-dom';
// import  SoluxLogo  from '../../layouts/ui/icons/flare_24dp_1F1F1F_FILL0_wght200_GRAD0_opsz24.svg';
import FlareIcon from '@mui/icons-material/Flare';
import styles from './index.module.css';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

import { useState } from 'react';
const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  // Check if item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo and Brand */}
        <NavLink to="/" className={styles.logoBrand}>
          <FlareIcon
            sx={{ 
              fontSize: 26, // Matching the 26px height
              color: '#FFC300',
              marginRight: '25px' // Space between icon and text
            }} 
          />
          <Heading 
            variant="normal20" 
            level="span" 
            color="#171F60"
            align="left"
            className={styles.brandText}
          >
            Solux Vision Media
          </Heading>
        </NavLink>

        {/* Hamburger menu button for mobile */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.menuIconOpen : styles.menuIcon}></span>
          <span className={menuOpen ? styles.menuIconOpen : styles.menuIcon}></span>
          <span className={menuOpen ? styles.menuIconOpen : styles.menuIcon}></span>
        </button>

        {/* Navigation Items */}
        <div className={`${styles.navItems} ${menuOpen ? styles.navItemsOpen : ''}`}>
          {navItems.map((item) => (
            <NavLink 
              key={item.id}
              to={item.path}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)} // Close menu on nav item click
            >
              <Button
                variant="nav"
                isNavActive={isActive(item.path)}
                className={styles.navItem}
                sx={{
                  height: '26px', // Matching the 26px height
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Heading 
                  variant="normal20" 
                  level="span" 
                  color="#171F60"
                >
                  {item.label}
                </Heading>
              </Button>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
