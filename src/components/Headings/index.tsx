import React from 'react';
import styles from './index.module.css';

type HeadingVariant = 
  | 'normal20'
  | 'bold25'
  | 'normal18'
  | 'light18'
  | 'center30'
  | 'bold40'
  | 'medium40'
  | 'normal18Transparent';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface HeadingProps {
  variant: HeadingVariant;
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  color?: string; // New color prop
  opacity?: number; // Optional opacity control
  align?: 'left' | 'center' | 'right'; // Optional text alignment
}

const Heading: React.FC<HeadingProps> = ({
  variant,
  level = 'h2',
  children,
  className = '',
  id,
  style,
  onClick,
  color,
  opacity,
  align,
}) => {
  const HeadingTag = level as keyof JSX.IntrinsicElements;
  
  // Combine all styles
  const combinedStyles = {
    ...style,
    ...(color && { color }),
    ...(opacity && { opacity }),
    ...(align && { textAlign: align }),
  };

  return (
    <HeadingTag
      id={id}
      style={combinedStyles}
      onClick={onClick}
      className={`${styles.heading} ${styles[variant]} ${className}`}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;