"use client"

import React, { useState } from "react";
import Menu from "../components/Menu";
import Cart from "../components/Cart";



export default function Page() {
  // State to store cart items
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: string) => {
    let prevItems = cartItems;
    prevItems.push(item);
    let newCart = prevItems;
    console.log('cartitems: ', cartItems)
    setCartItems(newCart);
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-2 h-screen w-full items-center flex justify-center">
        <Menu addToCart={addToCart}></Menu>
      </div>
      <div>
        <Cart items={cartItems}></Cart>
      </div>
    </div>
  );
}
