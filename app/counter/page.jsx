"use client";
import {useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button
         className="border px-3 py-2 rounded-md hover:bg-white/20">
          Increment
        </button>
        <span>{counter}</span>
        <button className="border px-3 py-2 rounded-md hover:bg-white/20">
          Decrement
        </button>
        <button className="border px-3 py-2 rounded-md hover:bg-white/20">
          Reset
        </button>
      </div>
    </main>
  );
};

export default Counter;
