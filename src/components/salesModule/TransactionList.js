import React from "react";

const TransactionList = ({ transactions }) => (
  <ul className="divide-y">
    {transactions.slice(0, 5).map(tx => (
      <li key={tx.id} className="py-2">
        {tx.productName} - {tx.quantity} ({tx.type}) on {new Date(tx.timestamp).toLocaleString()}
      </li>
    ))}
  </ul>
 <h3 className="dashboard-subtitle">Recent Transactions</h3>
      {recentTransactions.length > 0 ? (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.productName}</td>
                <td>{tx.type === "sale" ? "Sale" : "Restock"}</td>
                <td>{tx.quantity}</td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
);

export default TransactionList;
