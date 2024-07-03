import { createSelector } from 'reselect';


export const getAllTransactions = createSelector(
    state => state.accounts, // Assuming 'accounts' is the slice containing your account data
    accounts => {
      let allTransactions = [];
        Object.values(accounts).forEach(account => {
        allTransactions = [...allTransactions, ...Object.values(account.transactions)];
      });
  
      return allTransactions;
    }
  );

export const getAllTransactionsForAccount = createSelector(
    state => state.accounts, 
    (_, account_id) => account_id, 
    (accounts, account_id) => {
      const account = accounts[account_id];
  
      if (account) {
        return Object.values(account.transactions);
      } else {
        return [];
      }
    }
  );


export const selectTransactionById = createSelector(
    state => state.accounts, 
    (_, accountId, transactionId) => accountId, 
    (_, accountId, transactionId) => transactionId, 
    (accounts, accountId, transactionId) => {
      const account = accounts[accountId];
  
      if (account) {
        return account.transactions[transactionId] || null;
      } else {
        return null;
      }
    }
  );


  export const selectTransactionCategoryById = createSelector(
    state => state.accounts, 
    (_, accountId, transactionId, category) => accountId, 
    (_, accountId, transactionId, category) => transactionId, 
    (_, accountId, transactionId, category) => category, 
    (accounts, accountId, transactionId, category) => {
      const account = accounts[accountId];
  
      if (account) {
        return account.transactions[transactionId][category] || null;
      } else {
        return null;
      }
    }
  );


export const getSummedBalancesAllAccounts = createSelector(
    state => state.accounts, 
    accounts => {
      let summedBalances = {
        totalClearedBalance: 0,
        totalUnclearedBalance: 0,
        totalWorkingBalance: 0
      };
  
      Object.values(accounts).forEach(account => {
        summedBalances.totalClearedBalance += account.cleared_balance;
        summedBalances.totalUnclearedBalance += account.uncleared_balance;
        summedBalances.totalWorkingBalance += account.working_balance;
      });
  
      return summedBalances;
    }
  );

  export const getBalancesForAccount = createSelector(
    state => state.accounts, 
    (_, account_id) => account_id, 
    (accounts, account_id) => {
      const account = accounts[account_id];
  
      if (account) {
        return {
          cleared_balance: account.cleared_balance,
          uncleared_balance: account.uncleared_balance,
          working_balance: account.working_balance
        };
      } else {
        return {
          cleared_balance: 0,
          uncleared_balance: 0,
          working_balance: 0
        };
      }
    }
  );
  