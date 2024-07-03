import { createSelector } from 'reselect';

export const getCategoriesByParentGroup = createSelector(
    state => state.budget.budget.categories, // Selector function to get the categories slice from state
    categories => {
      let categoriesByParentGroup = {};
  
      // Iterate over each category and group them by parent_group
      Object.entries(categories).forEach(([category, details]) => {
        const parentGroup = details.parent_group;
  
        // If parent_group already exists in the object, push the category to its array
        if (categoriesByParentGroup[parentGroup]) {
          categoriesByParentGroup[parentGroup].push(category);
        } else {
          // Otherwise, create a new array with the category as the first item
          categoriesByParentGroup[parentGroup] = [category];
        }
      });
  
      return categoriesByParentGroup;
    }
  );

export const getParentCategories = createSelector(
    state => state.budget.parent_categories, // Selector function to get the categories slice from state
    categories => {
  
      return categories;
    }
  );

export const getParentCategory = createSelector(
    state => state.budget.parent_categories, 
    (_, id) => id, 
    (items, id) => items.find((item) => item.id === id)
  );

export const getCategory = createSelector(
    state => state.budget.categories, 
    (_, name) => name, 
    (categories, id) => {return categories[id]}
  );

export const getToBeAssigned = createSelector(
  state => state.budget,
  budget => {return budget.to_be_assigned}
);

export const getAvailibleBalanceForCategory = createSelector(
  state => state.budget.categories, 
  state => state.budget,
  (_, selected_category) => selected_category, 
  (categories, budget, selected_category) => {
    if (selected_category in categories){
      return {
        "balance_amount": categories[selected_category].available_funds,
        "left_over": categories[selected_category].leftover_from_last_month,
        "assigned_this_month":categories[selected_category].assigned,
      }
    }
    else {
      return {
        "balance_amount": budget.to_be_assigned,
        "left_over": budget.total_leftover_from_last,
        "assigned_this_month": budget.total_assigned,
      }
    }
  }
);


export const getTargetInfoForCategory = createSelector(
  state => state.budget.categories, 
  (_, selected_category) => selected_category, 
  (categories, selected_category) => {
    if (selected_category in categories && categories[selected_category].target){
      let target_amount = categories[selected_category].target.target_amount
      let total_funds = categories[selected_category].total_funds

      return {
        "target_amount": target_amount,
        "funded": categories[selected_category].total_funds,
        "to_go": (total_funds < target_amount) ? target_amount - total_funds : 0.00
      }
    }
    else {
      return null
    }
  }
);

export const getAutoAssignmentInfo = createSelector(
  state => state.budget.categories, 
  state => state.budget,
  (_, selected_category) => selected_category, 
  (categories, budget, selected_category) => {
    if (selected_category in categories){
      return categories[selected_category].previous_assignments
    }
    else {
      return budget.previous_assignments
    }
  }
);