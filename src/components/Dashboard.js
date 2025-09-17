import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ data }) => {
  const { products, transactions } = data;

  // Totals
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.quantity, 0);

  // Recent transactions (last 5)
  const recentTransactions = transactions.slice(0, 5);

  // Sales vs Purchases summary
  const summary = transactions.reduce(
    (acc, tx) => {
      if (tx.type === "sale") acc.sales += tx.quantity;
      if (tx.type === "restock") acc.purchases += tx.quantity;
      return acc;
    },
    { sales: 0, purchases: 0 }
  );

  const chartData = [
    {
      name: "Transactions",
      sales: summary.sales,
      purchases: summary.purchases,
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card small-card">
          <h3>{totalProducts}</h3>
          <p>Total Products</p>
        </div>
        <div className="dashboard-card small-card">
          <h3>{totalStock}</h3>
          <p>Total Stock</p>
        </div>
        <div className="dashboard-card small-card">
          <h3>{summary.sales}</h3>
          <p>Total Sales</p>
        </div>
        <div className="dashboard-card small-card">
          <h3>{summary.purchases}</h3>
          <p>Total Purchases</p>
        </div>
      </div>

      {/* Recent Transactions */}
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
      ) : (
        <p>No recent transactions</p>
      )}

      {/* Sales vs Purchases Bar Chart */}
      <div className="chart-container">
        <h3>Sales vs Purchases</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#3b82f6" />
            <Bar dataKey="purchases" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
