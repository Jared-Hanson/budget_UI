import { useSelector } from 'react-redux';
import { getToBeAssigned } from '../store/budget_selectors.js';

import React from 'react';
import './styles/header_styles.css';

const BudgetHeader = () => {

  const toBeAssigned = useSelector((state) => getToBeAssigned(state.budget));

  return (
    <div className="header">
      <div className="dateSection">
        <button className="navButton" onClick={() => console.log('Back button clicked')}>
          &lt;
        </button>
        <span className="date-span">Jul 2024</span>
        <button className="navButton" onClick={() => console.log('Forward button clicked')}>
          &gt;
        </button>
      </div>
      <div className="amountSection">
        <div className="amountContainer">
          <span className="amount">${toBeAssigned.toFixed(2)}</span>
          <span className="readyToAssign">Ready to Assign</span>
        </div>
        <button className="assignButton" onClick={() => console.log('Assign button clicked')}>
          Assign ▼
        </button>
      </div>
    </div>
  );
};

export default BudgetHeader;