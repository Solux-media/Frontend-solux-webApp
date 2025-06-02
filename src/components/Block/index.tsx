import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames';
import { Row, Col, Container } from 'react-bootstrap';

const Block = ({
  // Positioning
  top,
  left,
  right,
  bottom,
  // Dimensions
  width,
  height,
  minWidth,
  minHeight,
  // Background
  backgroundColor,
  backgroundImage,
  gradient,
  // Borders
  borderRadius,
  border,
  borderColor,
  borderWidth,
  // Effects
  shadow,
  opacity,
  rotate,
  // Layout
  display,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  margin,
  // Responsive
  responsive,
  sm,
  md,
  lg,
  xl,
  xxl,
  // Content
  children,
  className,
  style,
  onClick,
}) => {
  // Combine all styles
  const blockStyle = {
    // Positioning
    top: typeof top === 'number' ? `${top}px` : top,
    left: typeof left === 'number' ? `${left}px` : left,
    right: typeof right === 'number' ? `${right}px` : right,
    bottom: typeof bottom === 'number' ? `${bottom}px` : bottom,
    // Dimensions
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
    minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    // Background
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    background: gradient 
      ? `linear-gradient(${gradient.direction || 'to right'}, ${gradient.colors.join(', ')})` 
      : undefined,
    // Borders
    borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    border,
    borderColor,
    borderWidth: typeof borderWidth === 'number' ? `${borderWidth}px` : borderWidth,
    // Effects
    boxShadow: shadow,
    opacity,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    // Layout
    display,
    flexDirection,
    justifyContent,
    alignItems,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    margin: typeof margin === 'number' ? `${margin}px` : margin,
    // Merge with custom styles
    ...style,
  };

  // Responsive classes
  const responsiveClasses = responsive ? [
    sm && styles[`sm-${sm}`],
    md && styles[`md-${md}`],
    lg && styles[`lg-${lg}`],
    xl && styles[`xl-${xl}`],
    xxl && styles[`xxl-${xxl}`],
  ].filter(Boolean) : [];

  return (
    <div 
      className={classNames(
        styles.block,
        ...responsiveClasses,
        className
      )}
      style={blockStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Block.propTypes = {
  // Positioning
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // Dimensions
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // Background
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  gradient: PropTypes.shape({
    direction: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
  }),
  // Borders
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // Effects
  shadow: PropTypes.string,
  opacity: PropTypes.number,
  rotate: PropTypes.number,
  // Layout
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // Responsive
  responsive: PropTypes.bool,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xxl: PropTypes.string,
  // Content
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Block.defaultProps = {
  responsive: true,
};

export default Block;