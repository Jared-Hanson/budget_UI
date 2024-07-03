
'use client';
import TransactionTable from "../TrasactionTable";
import BalanceInfo from '../BalanceInfo';
import ActionButtons from '../ActionButtons';
import '../accounts_styles/accounts.css';


import { useSelector } from 'react-redux';
import { getSummedBalancesAllAccounts } from '../../store/accounts_selectors.js';



export default function AllAccounts(){

    const summedBalances = useSelector((state) => getSummedBalancesAllAccounts(state.accounts));

    return <div>
        <div className="header">
            <h1>All Accounts</h1>
            <BalanceInfo 
                clearedBalance={summedBalances.totalClearedBalance} 
                unclearedBalance={summedBalances.totalUnclearedBalance} 
                workingBalance={(parseFloat(summedBalances.totalClearedBalance) + parseFloat(summedBalances.totalUnclearedBalance)).toFixed(2)} 
            />
            <ActionButtons />
        </div>
        <TransactionTable account_id={null}/>
    </div>
    
}