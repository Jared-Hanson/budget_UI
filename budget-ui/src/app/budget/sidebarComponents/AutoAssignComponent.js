import React from 'react';
import './sidebar_styles/AutoAssignComponent.css';

import { useSelector } from 'react-redux';
import { getAutoAssignmentInfo } from '../../store/budget_selectors.js';

const AutoAssignComponent = ({selected_category}) => {

  const assignmentData = useSelector((state) => getAutoAssignmentInfo(state.budget, selected_category));


  return (
    <div className="component auto-assign-component">
      <h3>Auto-Assign</h3>
      <div className="auto-assign-options">

        <div className="option">
          <span>Fill Target</span>
          <span>${assignmentData.fill_target.toFixed(2)}</span>
        </div>

        <div className="option">
          <span>Assigned Last Month</span>
          <span>${assignmentData.assigned_last_month.toFixed(2)}</span>
        </div>

        <div className="option">
          <span>Spent Last Month</span>
          <span>${assignmentData.spent_last_month.toFixed(2)}</span>
        </div>

        <div className="option">
          <span>Average Assigned YTD</span>
          <span>${assignmentData.average_assigned_ytd.toFixed(2)}</span>
        </div>

        <div className="option">
          <span>Average Spent YTD</span>
          <span>${assignmentData.average_spent_ytd.toFixed(2)}</span>
        </div>

      </div>
    </div>
  );
};

export default AutoAssignComponent;