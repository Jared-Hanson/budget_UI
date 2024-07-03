import { useState } from 'react';
import Dropdown from './Dropdown.js'
import './accounts_styles/dropdown.css'

import { useSelector } from 'react-redux';
import { getCategoriesByParentGroup } from '../store/budget_selectors.js';
import { selectTransactionCategoryById } from '../store/accounts_selectors.js';

const Field = ({cell, account_id, transaction_id, isExpanded, updateText, has_dropdown }) => {
  const categories = useSelector((state) => getCategoriesByParentGroup(state));
  const categories_list = Object.keys(categories).map(key => {
      const value = categories[key];
      return `${key}:${value}`;
    });
  const text = useSelector((state) => selectTransactionCategoryById(state.accounts, account_id, transaction_id, cell));

  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  console.log(isEditing)

  const handleClick = () => {
    console.log("Field clicked on")
    setIsEditing(true)
  }

  const onChange = (event) => {
    console.log("Changed the input")
    // TODO, make this only update the actual value if it is a valid value. So they can manually inpu
    setCurrentText(event.target.value)
  }

  const dropdownSelect = (text) => {
    console.log("Dropdown selected")
    setIsEditing(false)
    setCurrentText(text)
    updateText(cell, text)
  }

  const onBlur = () => {
    console.log("Input left")
    if (categories_list.includes(currentText)){
      updateText(currentText)
    } 
    else{
      setCurrentText(text)
    }
    setIsEditing(false)
  }

  if (isExpanded) {
    const inputItem = (
      <input
        type="text"
        value={currentText}
        onClick={handleClick}
        onChange={onChange}
        onBlur={has_dropdown ? undefined : onBlur}
      />
    );

    return (
      <div>
        {inputItem}
        {isEditing && has_dropdown ? <Dropdown categories={categories} onSelect={dropdownSelect} onBlur={onBlur} curText={""}/> : null}
      </div>
    );
  } else {
    return <div>{currentText}</div>;
  }
};
          

export default Field;
