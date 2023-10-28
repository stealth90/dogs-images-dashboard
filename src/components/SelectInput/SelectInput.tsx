import React, { useState } from 'react';
import { capitalize } from '../../utils';
import './select-input.scss';

interface SelectInputProps {
  placeholder?: string;
  itemSelected?: string;
  items: string[] | null;
  disabled?: boolean;
  loading?: boolean;
  onSelectItem: (selectedItem: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  items,
  itemSelected,
  disabled,
  loading,
  placeholder = 'Select an option',
  onSelectItem,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOnSelectItem = (selectedItem: string) => {
    setIsOpenDropdown(false);
    onSelectItem(selectedItem);
  };

  return (
    <div className={`select-input ${disabled ? 'disabled' : ''}`}>
      <div
        className={`dropdown-container ${!itemSelected ? 'placeholder' : ''}`}
        onClick={() => setIsOpenDropdown((prevState) => !prevState)}
      >
        {itemSelected ? capitalize(itemSelected) : placeholder}
      </div>

      <ul className={`select-wrapper ${isOpenDropdown ? 'is-open' : ''}`}>
        {loading ? (
          <li className="dropdown-item no-option">
            <span>No options</span>
          </li>
        ) : items?.length ? (
          items.map((item) => (
            <li
              key={item}
              className={`dropdown-item ${itemSelected === item ? 'selected' : ''}`}
              onClick={() => handleOnSelectItem(item)}
            >
              <span>{capitalize(item)}</span>
            </li>
          ))
        ) : (
          <li className="dropdown-item no-option">
            <span>No options</span>
          </li>
        )}
      </ul>
    </div>
  );
};
export default SelectInput;
