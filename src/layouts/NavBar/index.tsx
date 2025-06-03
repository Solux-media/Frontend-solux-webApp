import { NavLink, useLocation } from 'react-router-dom';
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