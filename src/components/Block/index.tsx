import React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

interface GradientProps {
  direction?: string;
  colors: string[];
}

interface BlockProps {
  // Positioning
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  // Dimensions
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  // Background
  backgroundColor?: string;
  backgroundImage?: string;
  gradient?: GradientProps;
  // Borders
  borderRadius?: number | string;
  border?: string;
  borderColor?: string;
  borderWidth?: number | string;
  // Effects
  shadow?: string;
  opacity?: number;
  rotate?: number;
  // Layout
  display?: React.CSSProperties['display'];
  flexDirection?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  padding?: number | string;
  margin?: number | string;
  // Responsive
  responsive?: boolean;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  // Content
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Block: React.FC<BlockProps> = ({
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
  responsive = true,
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
  const blockStyle: React.CSSProperties = {
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

export default Block;