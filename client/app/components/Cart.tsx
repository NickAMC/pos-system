"use client";

import React, { useState } from "react";

interface CartProps {
  cartItems: string[];
}

const Cart: React.FC<{ items: string[] }> = ({ items }) => {
    return (
      <div className="mx-8 my-4 bg-gray-200 p-4 rounded-md shadow-md flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Cart</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
};

export default Cart;
