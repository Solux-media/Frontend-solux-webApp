import React from 'react';
import styles from './index.module.css';
import { Form } from 'react-bootstrap';

const DropdownMenu = ({ items, width, onSelect, type = 'checkbox', selectedItems = [] }) => {
  return (
    <div className={styles.dropdownMenu} style={{ width }}>
      {items.map((item, index) => (
        <div key={index} className={styles.dropdownItem}>
          {type === 'checkbox' ? (
            <Form.Check
              type="checkbox"
              id={`dropdown-checkbox-${index}`}
              label={item}
              checked={selectedItems.includes(item)}
              onChange={() => onSelect && onSelect(item)}
            />
          ) : type === 'radio' ? (
            <Form.Check
              type="radio"
              id={`dropdown-radio-${index}`}
              name="dropdown-radio"
              label={item}
              checked={selectedItems.includes(item)}
              onChange={() => onSelect && onSelect(item)}
            />
          ) : (
            <div 
              className={styles.dropdownTextItem}
              onClick={() => onSelect && onSelect(item)}
            >
              {item}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;