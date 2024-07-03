
import PropTypes from 'prop-types';
import{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactionById } from '../store/accounts_selectors.js';
import { updateTransaction } from '../store/accountsSlice.js'
import Field from './Field.js'
import './accounts_styles/TransactionRow.css';
import './accounts_styles/button.css';

const TransactionRow = ({transaction_id, account_id, isExpanded, isHighlighted, onRowClick, onClose }) => {

  const transaction = useSelector((state) => selectTransactionById(state.accounts, account_id, transaction_id));
  const [pendingTransactionUpdates, setPendingTransactionUpdates] = useState({});
  const dispatch = useDispatch();
  console.log(transaction_id)

  
  const handleTransactionUpdate = () => {
    dispatch(updateTransaction({ account_id, transaction_id, pendingTransactionUpdates }));
    setPendingTransactionUpdates({});
    onClose(transaction_id)
  };

  const onCancel = () => {
    onClose(transaction_id)
  };

  const addPendingUpdate = (key, value) => {
    setPendingTransactionUpdates(prevUpdates => ({
      ...prevUpdates,
      [key]: value
    }));
  };


  return (
    <div className="transaction-row-container">

      <div className={`transaction-row ${isHighlighted ? 'expanded-row' : 'plain-row'}`} onClick={onRowClick}>
        <div className="transaction-cell cell-1-account">{transaction.transaction_account}</div>
        <div className="transaction-cell cell-2-date">{transaction.transaction_date}</div>
        <div className="transaction-cell cell-3-payee">{transaction.transaction_payee}</div>
        <div className="transaction-cell cell-4-category">
          <Field
            cell="transaction_category"
            account_id={account_id}
            transaction_id={transaction_id}
            isExpanded={isExpanded}
            updateText={addPendingUpdate}
            has_dropdown={true}
          />
            
        </div>
        <div className="transaction-cell cell-5-memo">{transaction.transaction_memo}</div>
        <div className="transaction-cell cell-6-outflow">{transaction.transaction_outflow}</div>
        <div className="transaction-cell cell-7-inflow">{transaction.transaction_inflow}</div>
      </div>

      {isExpanded && ( // Optional submit row for when row is clicked
        <div className="transaction-row expanded-row">

          <div className="empty-cell"></div>
          <div className="buttons-cell">
            <button className="cancel-button" onClick={onCancel}>Cancel</button>
            <button className="submit-button" onClick={handleTransactionUpdate}>Submit</button>
          </div>
        </div>
    )}
    </div>
  );
};

TransactionRow.propTypes = {
  transaction: PropTypes.shape({
    account: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    payee: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    memo: PropTypes.string.isRequired,
    outflow: PropTypes.any.isRequired,
    inflow: PropTypes.any.isRequired,
  }).isRequired,
};

export default TransactionRow;