// ActionButtons.js
import React from 'react';
import './accounts_styles/header_styles.css';


const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="action-button">Undo</button>
      <button className="action-button">Redo</button>
    </div>
  );
};

export default ActionButtons;