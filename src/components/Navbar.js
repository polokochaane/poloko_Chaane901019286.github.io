
import React from "react";
import "../App.css"; 

const Navbar = ({ currentView, setView }) => {
  return (
  
      <nav className="flex justify-center gap-4 my-6">
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
      </nav>
    
  );
};

export default Navbar;
