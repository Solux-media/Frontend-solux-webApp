import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'about', label: 'About', path: '/about' },
  ];

  // Close mobile menu when a nav item is clicked
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo and Brand */}
        <NavLink to="/" className={styles.logoBrand} onClick={handleNavClick}>
          <div className={styles.logo}>
            <Heading variant="bold40" level="h1" color="#171F60">
              Logo
            </Heading>
          </div>
          <Heading 
            variant="normal20" 
            level="span" 
            color="#171F60"
            className={styles.brandText}
          >
            Solux Vision Media
          </Heading>
        </NavLink>

        {/* Navigation Items */}
        <div className={`${styles.navItems} ${isMobileMenuOpen ? styles.mobileActive : ''}`}>
          {navItems.map((item) => (
            <NavLink 
              key={item.id}
              to={item.path}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              <Button
                variant="nav"
                isNavActive={isActive(item.path)}
                className={styles.navItem}
                customStyles={{
                  position: isMobileMenuOpen ? 'relative' : 'absolute',
                  top: isMobileMenuOpen ? 'auto' : '50px',
                  left: isMobileMenuOpen ? 'auto' : undefined,
                }}
              >
                <Heading 
                  variant="normal20" 
                  level="span" 
                  color={isActive(item.path) ? "#4a6bff" : "#171F60"}
                  className={styles.navText}
                >
                  {item.label}
                </Heading>
              </Button>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="text" 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={styles.menuIcon}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;