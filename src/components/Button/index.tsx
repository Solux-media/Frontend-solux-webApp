import React, { type JSX } from 'react';
import type { SxProps } from '@mui/material';
import styles from './index.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'nav' | 'text';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isNavActive?: boolean;
  sx?: SxProps;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean | { sm?: boolean; md?: boolean; lg?: boolean };
  // New dynamic props
  color?: string;
  bgColor?: string;
  top?: string | number;
  left?: string | number;
  customStyles?: React.CSSProperties;
}

const Button = ({
  children,
  onClick,
  isNavActive = false,
  className = '',
  style,
  as: Component = 'button',
  href,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  // New props
  color,
  bgColor,
  top,
  left,
  customStyles = {},
  ...props
}: ButtonProps) => {
  // Responsive width handling
  const getResponsiveClasses = () => {
    if (typeof fullWidth === 'boolean') {
      return fullWidth ? styles.fullWidth : '';
    }
    
    const classes = [];
    if (fullWidth.sm) classes.push(styles.fullWidthSm);
    if (fullWidth.md) classes.push(styles.fullWidthMd);
    if (fullWidth.lg) classes.push(styles.fullWidthLg);
    return classes.join(' ');
  };

  // Combine all styles
  const combinedStyles = {
    ...style,
    ...customStyles,
    ...(color ? { color } : {}),
    ...(bgColor ? { backgroundColor: bgColor } : {}),
    ...(top ? { top: typeof top === 'number' ? `${top}px` : top } : {}),
    ...(left ? { left: typeof left === 'number' ? `${left}px` : left } : {}),
  };

  const buttonClasses = [
    styles.button,
    styles[variant],
    isNavActive ? styles.navActive : '',
    getResponsiveClasses(),
    className
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={buttonClasses} 
      onClick={onClick} 
      style={combinedStyles} 
      href={href}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={`${styles.iconWrapper} ${styles.iconLeft}`}>
          {icon}
        </span>
      )}
      
      <span className={styles.buttonText}>
        {children}
      </span>
      
      {icon && iconPosition === 'right' && (
        <span className={`${styles.iconWrapper} ${styles.iconRight}`}>
          {icon}
        </span>
      )}
    </Component>
  );
};

export default Button;