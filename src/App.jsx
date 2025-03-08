import React, { useState } from "react";
import Counter from "./Components/Counter";
import TotalCount from "./Components/TotalCount";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const total = count1 + count2;

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center mt-10">
          {/* Header Text */}
          <h1 className="text-3xl font-bold mb-10 text-gray-700">Simple Counter Application</h1>

          {/* Pass state and setters as props to Counter */}
          <Counter
            count1={count1}
            setCount1={setCount1}
            count2={count2}
            setCount2={setCount2}
          />

          {/* Total Count Component */}
          <TotalCount total={total} />
        </div>
      </div>
    </>
  );
}

export default App;