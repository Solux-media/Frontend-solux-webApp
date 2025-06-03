import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames';
import { Image } from 'react-bootstrap';

// Text Component
export const BlockText = ({ 
  as: Component = 'p', 
  children, 
  className, 
  responsive,
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

BlockText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  responsive: PropTypes.bool,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xxl: PropTypes.string,
  style: PropTypes.object,
};

BlockText.defaultProps = {
  responsive: true,
};

// Image Component
export const BlockImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  rounded, 
  circle,
  thumbnail,
  responsive,
  sm, md, lg, xl, xxl,
  className, 
  style = {} 
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
    />
  );
};

BlockImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  thumbnail: PropTypes.bool,
  responsive: PropTypes.bool,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xxl: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

BlockImage.defaultProps = {
  responsive: true,
};

// Line Component
export const BlockLine = ({ 
  direction = 'horizontal', 
  length = '100%', 
  thickness = '1px', 
  color = '#000', 
  responsive,
  sm, md, lg, xl, xxl,
  className, 
  style = {} 
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
    />
  );
};

BlockLine.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  length: PropTypes.string,
  thickness: PropTypes.string,
  color: PropTypes.string,
  responsive: PropTypes.bool,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xxl: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

BlockLine.defaultProps = {
  responsive: true,
};