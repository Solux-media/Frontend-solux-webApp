import { NavLink, useLocation } from 'react-router-dom';
// import  SoluxLogo  from '../../layouts/ui/icons/flare_24dp_1F1F1F_FILL0_wght200_GRAD0_opsz24.svg';
import FlareIcon from '@mui/icons-material/Flare';
import styles from './index.module.css';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

const NavBar = () => {
  const location = useLocation();
  
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

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo and Brand */}
        <NavLink to="/" className={styles.logoBrand}>
          {/* <img 
            src={SoluxLogo} 
            alt="solux vision media logo"
            className={styles.logoIcon}
            aria-hidden="true"
            style={{color: '#FFC300' }} 
          /> */}
           <FlareIcon 
            sx={{ 
              fontSize: 26,
              color: '#FFC300',
              marginRight: '25px' 
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

        {/* Mobile Menu Button (Hamburger) */}
        <button className={styles.mobileMenuButton} aria-label="Open menu">
          <span className={styles.mobileMenuIcon}></span>
        </button>

        {/* Navigation Items - Desktop */}
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <NavLink 
              key={item.id}
              to={item.path}
              className={styles.navLink}
            >
              <Button
                variant="nav"
                isNavActive={isActive(item.path)}
                className={styles.navItem}
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