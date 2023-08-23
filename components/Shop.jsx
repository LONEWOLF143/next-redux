"use client";

import React from "react";
import { useSelector } from "react-redux";

const Shop = () => {
  const data = useSelector((state) => state.shop.data)
  
  return (
    <div id="grid">
      {data.map((item, i) => (
        <div key={i} className="w-full bg-slate-700 rounded-md p-[1rem]">
          <img className="w-[70%] mx-auto" src={item.image_url} alt="img" />
          <div className="py-4">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
          <button
            className="bg-blue-700 w-full text-center mt-5 py-2 hover:bg-blue-800
          rounded-md">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
