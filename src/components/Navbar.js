
import React from "react";
import "../App.css"; 

const Navbar = ({ currentView, setView }) => {
  return (
<<<<<<< HEAD
  
      <div className="nav-container">
=======
  <div className="nav-container">
>>>>>>> 9bdacc2 (Added sales vs purchases chart and extra dashboard cards)
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
<<<<<<< HEAD
      <div/>
=======

    </div>
>>>>>>> 9bdacc2 (Added sales vs purchases chart and extra dashboard cards)
    
  );
};

export default Navbar;
