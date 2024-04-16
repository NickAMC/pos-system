"use client"

import React, { useState } from "react";

interface MenuProps {
  addToCart: (item: string) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  // Array of menu items
  const menuItems = [
    "Menu Item 1",
    "Menu Item 2",
    "Menu Item 3",
    "Menu Item 4",
    "Menu Item 5",
    "Menu Item 6",
  ];

  return (
    <div className="w-full grid grid-cols-3 h-screen">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="m-8 bg-gray-200 p-4 rounded-md shadow-md mb-4 hover:bg-gray-300 transition-colors"
          onClick={() => {
            addToCart(item);
            console.log("item: ", item);
          }} // Add item to cart on click
        >
          {/* Card content */}
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;