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
  'data-testid'?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  items,
  itemSelected,
  disabled,
  loading,
  placeholder = 'Select an option',
  onSelectItem,
  ...rest
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOnSelectItem = (selectedItem: string) => {
    setIsOpenDropdown(false);
    onSelectItem(selectedItem);
  };

  return (
    <div data-testid={rest['data-testid']} className={`select-input ${disabled ? 'disabled' : ''}`}>
      <div
        data-testid={`${rest['data-testid']}-dropdown`}
        className={`dropdown-container ${!itemSelected ? 'placeholder' : ''}`}
        onClick={() => setIsOpenDropdown((prevState) => !prevState)}
      >
        {itemSelected ? capitalize(itemSelected) : placeholder}
      </div>

      <ul
        data-testid={`${rest['data-testid']}-dropdown-list`}
        className={`select-wrapper ${isOpenDropdown ? 'is-open' : ''}`}
      >
        {loading ? (
          <li data-testid={`${rest['data-testid']}-noOptions`} className="dropdown-item no-option">
            <span>No options</span>
          </li>
        ) : items?.length ? (
          items.map((item, index) => (
            <li
              data-testid={`${rest['data-testid']}-item-${index}`}
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
