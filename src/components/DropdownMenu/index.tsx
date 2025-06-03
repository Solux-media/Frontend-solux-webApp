import React from 'react';
import styles from './index.module.css';
import { Form } from 'react-bootstrap';

interface DropdownMenuProps {
  items: string[];
  width?: string | number;
  onSelect?: (item: string) => void;
  type?: 'checkbox' | 'radio' | 'text';
  selectedItems?: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  items, 
  width, 
  onSelect, 
  type = 'checkbox', 
  selectedItems = [] 
}) => {
  const menuStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width
  };

  return (
    <div className={styles.dropdownMenu} style={menuStyle}>
      {items.map((item, index) => (
        <div key={index} className={styles.dropdownItem}>
          {type === 'checkbox' ? (
            <Form.Check
              type="checkbox"
              id={`dropdown-checkbox-${index}`}
              label={item}
              checked={selectedItems.includes(item)}
              onChange={() => onSelect?.(item)}
            />
          ) : type === 'radio' ? (
            <Form.Check
              type="radio"
              id={`dropdown-radio-${index}`}
              name="dropdown-radio"
              label={item}
              checked={selectedItems.includes(item)}
              onChange={() => onSelect?.(item)}
            />
          ) : (
            <div 
              className={styles.dropdownTextItem}
              onClick={() => onSelect?.(item)}
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