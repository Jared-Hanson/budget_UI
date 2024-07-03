// components/BudgetSidebar.js
import React from 'react';
import './styles/SidebarContainer.css';


import BalanceComponent from './sidebarComponents/BalanceComponent.js';
import TargetComponent from './sidebarComponents/TargetComponent.js';
import AutoAssignComponent from './sidebarComponents/AutoAssignComponent.js';
import NotesComponent from './sidebarComponents/NotesComponent.js';

const BudgetSidebar = ({selected_category}) => {
  // This should depend on the selected category
  return (
    <div className="sidebar-container">
      <h1>{selected_category}</h1>
      <div className='sidebar-bubble'>
        <BalanceComponent selected_category={selected_category}/>
      </div>
      <div className='sidebar-bubble'>
        <TargetComponent selected_category={selected_category}/>
      </div>
      <div className='sidebar-bubble'>
        <AutoAssignComponent selected_category={selected_category}/>
      </div>
      <div className='sidebar-bubble'>
        <NotesComponent selected_category={selected_category}/>
      </div>
    </div>
  );
};

export default BudgetSidebar;