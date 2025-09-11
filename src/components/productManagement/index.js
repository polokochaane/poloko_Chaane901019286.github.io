import React from "react";
import ProductForm from "./ItemForm";
import ProductTable from "./ItemTable";

const ProductManagement = ({ data, saveData, setError }) => {
  const { products } = data;

  const handleDelete = id => {
    saveData({ ...data, products: products.filter(p => p.id !== id) });
  };

  const handleEdit = product => {
    // you can pass this into ProductForm with props if needed
    console.log("Edit product:", product);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Management</h2>
      <ProductForm data={data} saveData={saveData} setError={setError} />
      <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default ProductManagement;
