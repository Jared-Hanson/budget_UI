

import './accounts_styles/TransactionRow.css';
import './accounts_styles/button.css';

const TransactionRowHeader = () => {

    const transaction={
        account: "Account",
        date: "Date",
        payee: "Payee",
        category: "Category",
        memo: "Memo",
        outflow: "Outflow",
        inflow: "Inflow",
        id: "header",
    }

  return (
    <div className="transaction-row-container">
      <div className="transaction-row plain-row">
        <div className="transaction-cell cell-1-account">{transaction.account}</div>
        <div className="transaction-cell cell-2-date">{transaction.date}</div>
        <div className="transaction-cell cell-3-payee">{transaction.payee}</div>
        <div className="transaction-cell cell-4-category">{transaction.category}</div>
        <div className="transaction-cell cell-5-memo">{transaction.memo}</div>
        <div className="transaction-cell cell-6-outflow">{transaction.outflow}</div>
        <div className="transaction-cell cell-7-inflow">{transaction.inflow}</div>
      </div>
    </div>
  );
};

export default TransactionRowHeader;