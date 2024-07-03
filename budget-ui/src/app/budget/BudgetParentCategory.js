// components/Category.js
import React, { useState } from 'react';
import BudgetCategory from './BudgetCategory';
import './styles/budget_styles.css';

import { useSelector } from 'react-redux';
import { getParentCategory } from '../store/budget_selectors.js';

const BudgetParentCategory = ({ category_id, category, selected_category, set_category_selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const CategoryInfo = useSelector((state) => getParentCategory(state.budget, category_id));


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    set_category_selected(category)
  };

  return (
    <div>
      <div className="category-parent" onClick={toggleOpen}>
        {category}
      </div>
      <div className={isOpen ? '' : 'hide'} >
        {CategoryInfo.subcategories.map(subCategory => (
          <div key={subCategory} onClick={() => {handleCategoryClick(subCategory)}}>
            <BudgetCategory subCategory={subCategory} selected_category={selected_category} set_selected_category={set_category_selected}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetParentCategory;