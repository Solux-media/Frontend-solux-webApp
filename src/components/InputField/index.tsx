import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import { Row, Col, Form } from 'react-bootstrap';
import DropdownMenu from '../DropdownMenu';

interface Position {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

interface InputFieldProps {
  type?: 'text' | 'textarea' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
  position?: Position;
  width?: number | string;
  height?: number | string;
  selectedItems?: string[];
  multiple?: boolean;
  dropdownItems?: string[];
  inline?: boolean;
  className?: string;
  onSelect?: (item: string) => void;
  // Form.Control props we want to include
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  position = {},
  width,
  height,
  selectedItems = [],
  multiple = false,
  dropdownItems = [],
  inline = false,
  className = '',
  onSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (dropdownItems.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const containerClasses = `${styles.inputContainer} ${inline ? styles.inline : ''} ${className}`;
  const inputClasses = `${styles.inputField} ${dropdownItems.length > 0 ? styles.hasDropdown : ''}`;

  return (
    <Row className={containerClasses} ref={dropdownRef}>
      <Col xs={inline ? 6 : 12} className={styles.inputCol}>
        <div className={styles.inputWrapper}>
          {multiple && selectedItems.length > 0 && (
            <div className={styles.selectedItems}>
              {selectedItems.slice(0, 3).map((item, index) => (
                <span key={index} className={styles.selectedItem}>
                  {item}
                </span>
              ))}
              {selectedItems.length > 3 && (
                <span className={styles.moreItems}>+{selectedItems.length - 3}</span>
              )}
            </div>
          )}
          
          <Form.Control
            as={type === 'textarea' ? 'textarea' : 'input'}
            type={type}
            className={inputClasses}
            style={{
              width: typeof width === 'number' ? `${width}px` : width,
              height: typeof height === 'number' ? `${height}px` : height,
              ...position
            }}
            onClick={toggleDropdown}
            {...props}
          />
          
          {dropdownItems.length > 0 && (
            <div
              className={`${styles.dropdownArrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}
              onClick={toggleDropdown}
            />
          )}
        </div>
        
        {isOpen && dropdownItems.length > 0 && (
          <DropdownMenu 
            items={dropdownItems} 
            width={width} 
            onSelect={onSelect}
            type={multiple ? 'checkbox' : 'text'}
            selectedItems={selectedItems}
          />
        )}
      </Col>
    </Row>
  );
};

export default InputField;