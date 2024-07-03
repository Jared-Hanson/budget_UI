
import { createSlice } from '@reduxjs/toolkit';
import budgetsData from '.././testing_data/budget_data.json'; // Assuming your JSON file is in the `data` directory

function convertToFloatWithTwoDecimals(data) {
    if (Array.isArray(data)) {
      return data.map(item => convertToFloatWithTwoDecimals(item));
    } else if (typeof data === 'object' && data !== null) {
      const result = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          result[key] = convertToFloatWithTwoDecimals(data[key]);
        }
      }
      return result;
    } else if (typeof data === 'number') {
      return parseFloat(data.toFixed(2));
    } else {
      return data;
    }
  }

const initialState = {
    budget: convertToFloatWithTwoDecimals(budgetsData.budget)
};

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        updateCategoryAssignment(state, action) {
            const { subCategory, ass } = action.payload;

            const category = state.budget.categories[subCategory];
            
            if (category) {
                // Store the old value for calculations
                const previousAssignedValue = category.assigned;

              
                // Update total_funds
                category.total_funds = category.leftover_from_last_month + ass;
                
                // Update available_funds
                category.available_funds = category.total_funds - category.activity;
                
                // Update assigned value
                category.assigned = ass;
                
                // Update to_be_assigned
                state.budget.to_be_assigned = state.budget.to_be_assigned + previousAssignedValue - ass;
            }
          }
    },
});

export const { updateCategoryAssignment } = budgetSlice.actions;
export default budgetSlice.reducer;
