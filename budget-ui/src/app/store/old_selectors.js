export const get_all_transactions = (accounts_state) => {
    let allTransactions = [];
    const accounts = accounts_state.accounts; // Assuming 'accounts' is the slice containing your account data

    // Iterate over each account and concatenate its transactions to allTransactions
    Object.values(accounts).forEach(account => {
        // Convert account.transactions object to an array and concatenate
        allTransactions = [...allTransactions, ...Object.values(account.transactions)];
    });

    return allTransactions;
};

// Selector to get all transactions for a specific account
export const get_all_transactions_for_account = (accounts_state, account_id) => {
    const account = accounts_state.accounts[account_id]; // Assuming 'accounts' is the slice containing your account data

    if (account) {
        return Object.values(account.transactions);
    } else {
        return [];
    }
};
// Selector to select a transaction by accountId and transactionId
export const select_transaction_by_id = (accounts_state, accountId, transactionId) => {
    const account = accounts_state.accounts[accountId];

    if (account) {
        const transaction = account.transactions[transactionId];
        return transaction ? transaction : null;
    } else {
        return null;
    }
};