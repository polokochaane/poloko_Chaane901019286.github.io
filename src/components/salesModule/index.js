import React from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";



const SalesModule = ({ data, saveData, setError }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Sales & Inventory</h2>
    <TransactionForm data={data} saveData={saveData} setError={setError} />
    <TransactionList transactions={data.transactions} />
  </div>
);

export default SalesModule;

