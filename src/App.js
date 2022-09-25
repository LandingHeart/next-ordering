import React, { useState, useEffect } from "react";
import ItemCard from "./components/ItemCard";
import axios from "axios";
import "./App.css";
export default function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setMenu(res.data);
    });
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="cotainer">
      <div style={{ display: "flex", flex: "1", alignSelf: "center" }}>
        <h1>Order Takeouts</h1>
      </div>

      {menu.map((item, index) => (
        <ItemCard
          item_name={item.item_name}
          item_img={item.item_img}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  );
}
