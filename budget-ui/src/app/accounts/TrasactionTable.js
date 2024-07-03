import TransactionRow from './TransactionRow';
import TransactionRowHeader from './TransactionRowHeader';
import './accounts_styles/TransactionTable.css';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { getAllTransactions, getAllTransactionsForAccount } from '../store/accounts_selectors.js';




const TransactionTable = ({account_id}) => {

    const transactions = useSelector(state => {
        if (account_id) {
            return getAllTransactionsForAccount(state.accounts, account_id);
        } else {
            return getAllTransactions(state.accounts);
        }
    });

    const [expandedRow, setExpandedRow] = useState({id:null,click_count:0});


    const handleRowClick = (index) => {
        if (expandedRow.id == index && expandedRow.click_count == 1){
            setExpandedRow({id:index, click_count:2});
        }
        else if (expandedRow.id == index && expandedRow.click_count == 0){
            setExpandedRow({id:index, click_count:1});
        }
        else if (expandedRow.id == index){
            setExpandedRow({id:index, click_count:2});
        }
        else{
            setExpandedRow({id:index, click_count:1});
        }
    };

    const handleRowClose  = (index) => {
        setExpandedRow({id:index, click_count:0});
    };



    return (
        <div className="transaction-container">
            <div className="transaction-header">
                <TransactionRowHeader/>
            </div>
            <div className="transaction-rows">
                {transactions.map(transaction => (
                <TransactionRow
                    key={transaction.transaction_id}
                    transaction_id={transaction.transaction_id}
                    account_id={transaction.parent_account_id}
                    isExpanded={expandedRow.id == transaction.transaction_id && expandedRow.click_count == 2}
                    isHighlighted={expandedRow.id == transaction.transaction_id}
                    onRowClick={() => handleRowClick(transaction.transaction_id)}
                    onClose={() => handleRowClose(transaction.transaction_id)}
                />
                ))}
            </div>
        </div>
        
    );
};

export default TransactionTable;



