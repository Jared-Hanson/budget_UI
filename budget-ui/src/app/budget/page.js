
'use client';

import BudgetHeader from './BudgetHeader';
import BudgetBody from './BudgetBody';
import BudgetSidebar from './BudgetSidebar';
import { useState } from 'react';
import './styles/budget_styles.css';

const BudgetPage = () => {

  const [current_category_selected, set_category_selected] = useState(null);


  return (
    <div>
      <BudgetHeader />
      <div className="budget-container">
        <BudgetBody selected_category={current_category_selected} set_category_selected={set_category_selected}/>
        <BudgetSidebar selected_category={current_category_selected}/>
      </div>
    </div>
  );
};

export default BudgetPage;