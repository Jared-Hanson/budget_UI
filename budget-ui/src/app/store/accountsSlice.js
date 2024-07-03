// store/accountsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import accountsData from '.././testing_data/test_accounts.json'; // Assuming your JSON file is in the `data` directory

const initialState = {
    accounts: accountsData.accounts
};

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        updateTransaction: (state, action) => {
            console.log("We are updating a transaction")
            console.log(action)
            const { account_id, transaction_id, pendingTransactionUpdates } = action.payload;

            state.accounts[account_id].transactions[transaction_id] = {
                ...state.accounts[account_id].transactions[transaction_id],
                ...pendingTransactionUpdates
            };

        },
    },
});

export const { updateTransaction } = accountsSlice.actions;
export default accountsSlice.reducer;
