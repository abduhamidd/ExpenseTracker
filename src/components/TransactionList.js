import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            key={transaction.id}></Transaction>
        ))}
      </ul>
    </>
  );
};
