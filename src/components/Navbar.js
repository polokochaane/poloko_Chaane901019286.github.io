
import React from "react";
import "../App.css"; 

const Navbar = ({ currentView, setView }) => {
  return (
  
      <div className="nav-container">
        <button
          onClick={() => setView("dashboard")}
          className={`nav-btn ${currentView === "dashboard" ? "active" : ""}`}
        >
        Dashboard
        </button>
        <button
          onClick={() => setView("products")}
          className={`nav-btn ${currentView === "products" ? "active" : ""}`}
        >
        Products
        </button>
        <button
          onClick={() => setView("sales")}
          className={`nav-btn ${currentView === "sales" ? "active" : ""}`}
        >
        Sales
        </button>
      <div/>
    
  );
};

export default Navbar;
