import React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import { Image, type ImageProps } from 'react-bootstrap';

// Types for responsive props
interface ResponsiveProps {
  responsive?: boolean;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

// Text Component
interface BlockTextProps extends React.HTMLAttributes<HTMLElement>, ResponsiveProps {
  as?: React.ElementType;
}

export const BlockText: React.FC<BlockTextProps> = ({ 
  as: Component = 'p', 
  children, 
  className, 
  responsive = true,
  sm, md, lg, xl, xxl,
  style = {},
  ...props 
}) => {
  const responsiveClasses = responsive ? [
    sm && styles[`text-sm-${sm}`],
    md && styles[`text-md-${md}`],
    lg && styles[`text-lg-${lg}`],
    xl && styles[`text-xl-${xl}`],
    xxl && styles[`text-xxl-${xxl}`],
  ].filter(Boolean) : [];

  return (
    <Component 
      className={classNames(styles.text, ...responsiveClasses, className)}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

// Image Component
interface BlockImageProps extends Omit<ImageProps, 'fluid'>, ResponsiveProps {
  src: string;
  alt: string;
  circle?: boolean;
}

export const BlockImage: React.FC<BlockImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  rounded, 
  circle,
  thumbnail,
  responsive = true,
  sm, md, lg, xl, xxl,
  className, 
  style = {},
  ...props
}) => {
  const responsiveClasses = responsive ? [
    sm && styles[`img-sm-${sm}`],
    md && styles[`img-md-${md}`],
    lg && styles[`img-lg-${lg}`],
    xl && styles[`img-xl-${xl}`],
    xxl && styles[`img-xxl-${xxl}`],
  ].filter(Boolean) : [];

  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width}
      height={height}
      rounded={rounded}
      roundedCircle={circle}
      thumbnail={thumbnail}
      className={classNames(styles.image, ...responsiveClasses, className)}
      style={style}
      fluid
      {...props}
    />
  );
};

// Line Component
interface BlockLineProps extends React.HTMLAttributes<HTMLDivElement>, ResponsiveProps {
  direction?: 'horizontal' | 'vertical';
  length?: string;
  thickness?: string;
  color?: string;
}

export const BlockLine: React.FC<BlockLineProps> = ({ 
  direction = 'horizontal', 
  length = '100%', 
  thickness = '1px', 
  color = '#000', 
  responsive = true,
  sm, md, lg, xl, xxl,
  className, 
  style = {},
  ...props
}) => {
  const responsiveClasses = responsive ? [
    sm && styles[`line-sm-${sm}`],
    md && styles[`line-md-${md}`],
    lg && styles[`line-lg-${lg}`],
    xl && styles[`line-xl-${xl}`],
    xxl && styles[`line-xxl-${xxl}`],
  ].filter(Boolean) : [];

  return (
    <div
      className={classNames(
        styles.line,
        styles[`line-${direction}`],
        ...responsiveClasses,
        className
      )}
      style={{
        [direction === 'horizontal' ? 'width' : 'height']: length,
        [direction === 'horizontal' ? 'height' : 'width']: thickness,
        backgroundColor: color,
        ...style,
      }}
      {...props}
    />
  );
};