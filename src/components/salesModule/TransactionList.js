import React from "react";

const TransactionList = ({ transactions }) => (
  <ul className="divide-y">
    {transactions.slice(0, 5).map(tx => (
      <li key={tx.id} className="py-2">
        {tx.productName} - {tx.quantity} ({tx.type}) on {new Date(tx.timestamp).toLocaleString()}
      </li>
    ))}
  </ul>

);

export default TransactionList;
