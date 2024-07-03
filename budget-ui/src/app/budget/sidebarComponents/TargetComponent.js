import React from 'react';
import './sidebar_styles/TargetComponent.css';

import { useSelector } from 'react-redux';
import { getTargetInfoForCategory } from '../../store/budget_selectors.js';

const TargetComponent = ({selected_category}) => {

  const targetData = useSelector((state) => getTargetInfoForCategory(state.budget, selected_category));
  let percentage = targetData ? ((targetData.target_amount - targetData.to_go) / targetData.target_amount ) * 100 : 0.00


  return (
    <div className="component target-component">
      <h3>Target</h3>
      <div>
        {targetData ? (
          <div>
            <div className="target-details">
              <p>Refill Up to ${targetData.target_amount.toFixed(2)} Each Month</p>
              <p>By the 1st of the Month</p>
              <div className="progress-circle">
                <span>{percentage.toFixed(0)}%</span>
              </div>
              <button className="assign-button">Assign ${targetData.to_go.toFixed(2)} to meet your target</button>
              <div className="target-info">
                <p>Needed This Month: ${targetData.target_amount.toFixed(2)}</p>
                <p>Funded: ${targetData.funded.toFixed(2)}</p>
                <p>To Go: ${targetData.to_go.toFixed(2)}</p>
              </div>
            </div>
            <button className="edit-target-button">Edit Target</button>
            <div className="snooze-target">
              <label>
                <input type="checkbox" />
                Snooze target for this month
              </label>
            </div>
          </div>
        ) : <div>
          <button className="edit-target-button">Create Target</button>
        </div>
        
        }

      </div>

    </div>
  );
};

export default TargetComponent;