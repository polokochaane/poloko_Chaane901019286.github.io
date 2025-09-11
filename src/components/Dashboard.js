import React from "react";

const Dashboard = ({ data }) => {
  const { products, transactions } = data;
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.quantity, 0);
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-primary-brand border-b-2 pb-2 mb-6">
        Dashboard Overview
      </h2>

      <div className="flex gap-6 text-center">
        <div className="bg-gray-100 p-6 rounded-lg w-full">
          <h3 className="text-4xl font-extrabold text-primary-brand">
            {totalProducts}
          </h3>
          <p>Total Products</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg w-full">
          <h3 className="text-4xl font-extrabold text-primary-brand">
            {totalStock}
          </h3>
          <p>Total Stock</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">Recent Transactions</h3>
      {recentTransactions.length > 0 ? (
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td>{tx.productName}</td>
                <td>{tx.type === "sale" ? "Sale" : "Restock"}</td>
                <td>{tx.quantity}</td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No recent transactions</p>
      )}
    </div>
  );
};

export default Dashboard;
