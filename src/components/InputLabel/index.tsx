import React from 'react';
import styles from './index.module.css';
import { Row, Col } from 'react-bootstrap';

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  isHeading?: boolean;
  className?: string;
  responsive?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({
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