
import './styles/category_styles.css';
import React, { useState } from 'react';


import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../store/budget_selectors.js';
import { updateCategoryAssignment } from '../store/budgetSlice.js'

function isValidFloat(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return false;
  }
  const num = Number(str);
  return !isNaN(num) && !isNaN(parseFloat(str));
}

export const calculateProgress = (category) => {

  let percentage = 0;
  let color = '#dad7d7'; // grey
  let secondary_color = '#dad7d7'; // grey

  
  let assigned = parseFloat(category.total_funds)
  let target = parseFloat(category.target ? category.target.target_amount : null)
  let activity = parseFloat(category.activity)

  if (target){
    if(assigned < target){
      // We are under assigned
      color = '#f0ad4e'; // yellow
      percentage = (assigned / target) * 100;
    }
    else {
      color = '#5cb85c'; // green
      percentage = ((category.total_funds - activity) / category.total_funds) * 100
      secondary_color = '#aef3ae';
    }

  }
  else{
    // This means there is no target
    // If there is no assignments or activity, then the progress is 0 and the bar is clear
    if (assigned == 0.00 && activity == 0.00) {
      color = '#dad7d7'; // white
      percentage = 100;
    }
    else if (assigned > 0.00 && activity <= assigned){
      color = '#5cb85c'; // green
      percentage = (activity / assigned) * 100;
    }
    else{
      // There is more activity then assigned, mark it red
      color = '#d9534f'; // green
      percentage = 100;
    }
  }
  return { percentage, color, secondary_color };
};

const BudgetCategory = ({ subCategory, selected_category, set_selected_category }) => {

  const CategoryInfo = useSelector((state) => getCategory(state.budget, subCategory));
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [assignmentValue, setAssignmentValue] = useState(CategoryInfo.assigned.toFixed(2));

  const { percentage, color, secondary_color } = calculateProgress(CategoryInfo);


  const handleAssignmentClick = () => {
    setIsEditing(true);
  };

  const handleAssignmentChange = (e) => {
    setAssignmentValue(e.target.value);
  };

  const handleAssignmentBlur = () => {
    console.log(assignmentValue)
    if (isValidFloat(assignmentValue)){
      let ass = parseFloat(assignmentValue)
      setAssignmentValue(ass.toFixed(2))
      // This is a valid new assignment value. Update the state
      dispatch(updateCategoryAssignment({ subCategory, ass }));
    }
    else{
      setAssignmentValue(CategoryInfo.assigned.toFixed(2))
    }
    setIsEditing(false);
  };

  const selectedStyle = {
    backgroundColor: (subCategory===selected_category) ? 'lightblue' : 'inherit',  // Change 'lightblue' to your desired color
    // Add other styles as needed
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      set_selected_category(subCategory);
    } else {
      set_selected_category(null);
    }
  };



  return (
    <div className="category" style={selectedStyle}>
      <div className="name-and-progress-bar">
        <div className="category-name">
          <input type="checkbox" checked={selected_category===subCategory} onChange={handleCheckboxChange}/>
          <span>{subCategory}</span>
        </div>
        <div className="category-progress">
          <div className="progress-bar-container" style={{backgroundColor: `${secondary_color}`}}>
            <div className="progress-bar" style={{ width: `${percentage}%`, backgroundColor: `${color}` }}></div>
          </div>
        </div>
        <div className="category-info">{CategoryInfo.status_info}</div>
      </div>
      <div className="category-details">
        <div
          className="assignment-field"
          onClick={handleAssignmentClick}
        >
          {isEditing ? (
            <input
              type="text"
              value={assignmentValue}
              onChange={handleAssignmentChange}
              onBlur={handleAssignmentBlur}
              autoFocus
            />
          ) : (
            <span>{assignmentValue}</span>
          )}
        </div>
        <div className="spending-field">
          <span>{CategoryInfo.activity.toFixed(2)}</span>
        </div>
        <div className="available-field">
          <span style={{backgroundColor: `${color}`}}>{CategoryInfo.available_funds.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetCategory;