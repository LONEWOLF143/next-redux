"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "@/Redux/Slices/counterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(null);
  // const handleIncrement = () => {
  //   dispatch(increment())
  // }
  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
          className="border px-3 py-2 rounded-md hover:bg-white/20"
        >
          Reset
        </button>
      </div>
    </main>
  );
};

export default Counter;
