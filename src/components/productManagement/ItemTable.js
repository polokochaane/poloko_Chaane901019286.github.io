import React from "react";

const ItemTable = ({ products, onEdit, onDelete }) => (
  <table className="w-full border">
    <thead className="bg-gray-200">
      <tr>
        <th>Name</th><th>Price</th><th>Qty</th><th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map(p => (
        <tr key={p.id} className="border-t">
          <td>{p.name}</td>
          <td>M{p.price}</td>
          <td>{p.quantity}</td>
          <td>
            <button onClick={() => onEdit(p)} className="text-blue-500">Edit</button>
            <button onClick={() => onDelete(p.id)} className="text-red-500 ml-2">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ItemTable;
