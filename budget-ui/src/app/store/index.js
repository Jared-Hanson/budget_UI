// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './accountsSlice';
import budgetReducer from './budgetSlice';


const store = configureStore({
    reducer: {
        accounts: accountsReducer,
        budget: budgetReducer, // Add budgetReducer to the reducers
    },
});

export default store;