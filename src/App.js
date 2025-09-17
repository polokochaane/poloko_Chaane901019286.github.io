import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import ProductManagement from "./components/productManagement";
import SalesModule from "./components/salesModule";
import { initDB, readDB, writeDB, resetDB } from "./services/db";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState({ products: [], transactions: [] });
  const [view, setView] = useState("dashboard");
  const [error, setError] = useState("");

  useEffect(() => {
    initDB();
    setData(readDB());
  }, []);

  const saveData = (newData) => {
    writeDB(newData);
    setData(newData);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the database?")) {
      const newData = resetDB();
      setData(newData);
      setError("");
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header>
        Wings Cafe Inventory
        <button onClick={handleReset} className="reset-btn">
          Reset Database
        </button>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar Navbar */}
        <Navbar currentView={view} setView={setView} />

        {/* Page Content */}
        <main>
          {view === "dashboard" && <Dashboard data={data} />}
          {view === "products" &&  (
            <ProductManagement
              data={data}
              saveData={saveData}
              setError={setError}
            />
          )}
          {view === "sales" && (
            <SalesModule
              data={data}
              saveData={saveData}
              setError={setError}
            />
          )}
        </main>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="error-banner">
          {error}
          <button onClick={() => setError("")}>✖</button>
        </div>
      )}
    </div>
  );
};

export default App;
