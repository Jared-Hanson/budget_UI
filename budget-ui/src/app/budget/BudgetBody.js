// components/BudgetBody.js
import React from 'react';
import BudgetParentCategory from './BudgetParentCategory';
import './styles/budget_styles.css';

import { useSelector } from 'react-redux';
import { getParentCategories } from '../store/budget_selectors.js';

const BudgetBody = ({ selected_category, set_category_selected }) => {
  // Mock data
  const parentCatagories = useSelector((state) => getParentCategories(state.budget));


  return (
    <div className='budget-main'>
      <div className='header-row'>
        <div className='header-CATEGORY'>CATEGORY</div>
        <div className='header-ASSIGNED'>ASSIGNED</div>
        <div className='header-ACTIVITY'>ACTIVITY</div>
        <div className='header-AVAILIBLE'>AVAILIBLE</div>
      </div>
      <div className="budget-sub-container">
        {parentCatagories.map(category => (
          <BudgetParentCategory key={category.id} category_id={category.id} category={category.name} selected_category={selected_category} set_category_selected={set_category_selected}  />
        ))}
      </div>
    </div>
  );
};

export default BudgetBody;