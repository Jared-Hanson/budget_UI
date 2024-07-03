import React from 'react';
import './sidebar_styles/BalanceComponent.css';
import { useSelector } from 'react-redux';
import { getAvailibleBalanceForCategory } from '../../store/budget_selectors.js';

const BalanceComponent = ({selected_category}) => {

  const balanceData = useSelector((state) => getAvailibleBalanceForCategory(state.budget, selected_category));

  

  return (
    <div className="component balance-component">
      <h3>Available Balance</h3>
      <div className="balance-amount">{balanceData.balance_amount.toFixed(2)}</div>
      <div className="balance-details">
        <p>Left Over From Last Month: {balanceData.left_over.toFixed(2)}</p>
        <p>Assigned This Month: {balanceData.assigned_this_month.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BalanceComponent;
