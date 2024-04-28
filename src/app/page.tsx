"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const addToNumber = () => {
    setCount(count + 1);
  }

  const subToNumber = () => {
    setCount(count - 1);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-[60px] bg-[#333] px-2">
      <div className="flex flex-col items-center bg-white p-10 rounded-xl">
        <h1 className="text-[35px]">Counter App</h1>
        <p>{count}</p>
        <div className="flex gap-x-10">
          <button onClick={addToNumber}>+</button>
          <button onClick={subToNumber}>-</button>
        </div>
      </div>
    </div>
  );
}
