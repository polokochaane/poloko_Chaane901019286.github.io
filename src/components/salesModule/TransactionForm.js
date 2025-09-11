import React, { useState } from "react";
import { readDB } from "../../services/db";

const TransactionForm = ({ data, saveData, setError }) => {
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState("");
  const [type, setType] = useState("sale");

  const handleSubmit = e => {
    e.preventDefault();
    if (!productId || !qty) return setError("Select product and enter quantity.");

    const db = readDB();
    const product = db.products.find(p => p.id === +productId);
    if (!product) return setError("Product not found.");

    let newQty = type === "sale" ? product.quantity - +qty : product.quantity + +qty;
    if (newQty < 0) return setError("Not enough stock.");

    const updatedProducts = db.products.map(p => p.id === product.id ? { ...p, quantity: newQty } : p);
    const newTx = { id: Date.now(), productId: product.id, productName: product.name, quantity: +qty, type, timestamp: new Date().toISOString() };

    saveData({ products: updatedProducts, transactions: [newTx, ...db.transactions] });
    setProductId(""); setQty(""); setType("sale");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <select value={productId} onChange={e => setProductId(e.target.value)} className="border p-2">
        <option value="">Select product</option>
        {data.products.map(p => <option key={p.id} value={p.id}>{p.name} ({p.quantity})</option>)}
      </select>
      <input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="Qty" className="border p-2" />
      <select value={type} onChange={e => setType(e.target.value)} className="border p-2">
        <option value="sale">Sale</option>
        <option value="restock">Restock</option>
      </select>
      <button className="bg-blue-500 text-white px-4 rounded">Record</button>
    </form>
  );
};

export default TransactionForm;
