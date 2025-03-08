import React from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = ({ count1, setCount1, count2, setCount2 }) => {
  return (
    <div className="flex gap-5 items-center justify-center">
      {/* First Counter */}
      <div className="bg-white shadow-xl p-6 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">Counter App 1</h2>
        <Count value={count1} />
        <div className="flex gap-4 mt-4">
          <Button type="increase" onClick={() => setCount1(count1 + 1)} />
          <Button type="decrease" onClick={() => setCount1(count1 - 1)} />
        </div>
      </div>

      {/* Second Counter */}
      <div className="bg-white shadow-xl p-6 rounded-lg text-center mt-3">
        <h2 className="text-xl font-bold mb-4">Counter App 2</h2>
        <Count value={count2} />
        <div className="flex gap-4 mt-4">
          <Button type="increase" onClick={() => setCount2(count2 + 1)} />
          <Button type="decrease" onClick={() => setCount2(count2 - 1)} />
        </div>
      </div>
    </div>
  );
};

export default Counter;