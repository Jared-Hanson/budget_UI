// BalanceInfo.js
import React from 'react';
import './accounts_styles/header_styles.css';

const BalanceInfo = ({ clearedBalance, unclearedBalance, workingBalance }) => {
  return (
    <div className="balance-info">
      <div className="balance">
        <span className="balance-label">Cleared Balance</span>
        <span className="balance-value">{clearedBalance}</span>
      </div>
      <p>+</p>
      <div className="balance">
        <span className="balance-label">Uncleared Balance</span>
        <span className="balance-value">{unclearedBalance}</span>
      </div>
      <p>=</p>
      <div className="balance">
        <span className="balance-label">Working Balance</span>
        <span className="balance-value">{workingBalance}</span>
      </div>
    </div>
  );
};

export default BalanceInfo;
