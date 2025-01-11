import './App.css'
import React, { useState } from "react";

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {/* Render each item in the list */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemListManager;