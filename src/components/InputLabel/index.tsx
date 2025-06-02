import React from 'react';
import styles from './index.module.css';
import { Row, Col } from 'react-bootstrap';

const InputLabel = ({
  text,
  isHeading = false,
  className = '',
  responsive = true,
  ...props
}) => {
  const labelClasses = `${styles.label} ${isHeading ? styles.heading : ''} ${className}`;
  
  return (
    <Row className={responsive ? styles.responsiveRow : ''}>
      <Col>
        <label className={labelClasses} {...props}>
          {text}
        </label>
      </Col>
    </Row>
  );
};

export default InputLabel;