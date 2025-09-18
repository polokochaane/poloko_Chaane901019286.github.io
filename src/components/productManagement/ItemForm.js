import React, { useState } from "react";
import { readDB } from "../../services/db";

const ItemForm = ({ data, saveData, setError }) => {
  const [form, setForm] = useState({ id: null, name: "", price: "", quantity: "" });
  const [mode, setMode] = useState("add");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.price || !form.quantity) {
      setError("Name, Price, and Quantity are required.");
      return;
    }

    const db = readDB();
    let updated;
    if (mode === "add") {
      updated = [...db.products, { ...form, id: Date.now(), price: +form.price, quantity: +form.quantity }];
    } else {
      updated = db.products.map(p => p.id === form.id ? { ...form, price: +form.price, quantity: +form.quantity } : p);
    }
    saveData({ ...db, products: updated });
    setForm({ id: null, name: "", price: "", quantity: "" });
    setMode("add");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2" />
      <input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="Qty" className="border p-2" />
      <button className="bg-green-500 text-white px-4 rounded">{mode === "add" ? "Add" : "Update"}</button>
    </form>
  );
};

export default ItemForm;
