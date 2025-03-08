import React from "react";
import Count from "./Count";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "../Redux/counterSlice";

const Counter = () => {
  // useDispatch hook to get access to the dispatch function for dispatching actions
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-lg p-6 rounded-lg text-center w-full max-w-sm sm:max-w-md md:max-w-lg">
        
        {/* Display the current counter value */}
        <Count />

        {/* Button group arranged in a responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          
          {/* Button to increase counter by 1 */}
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 text-white bg-green-500 uppercase font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-green-600"
          >
            Increase
          </button>

          {/* Button to decrease counter by 1 */}
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 text-white bg-red-500 uppercase font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-red-600"
          >
            Decrease
          </button>

          {/* Button to multiply counter by 2 */}
          <button
            onClick={() => dispatch(incrementByAmount(2))}
            className="px-4 py-2 text-white bg-black uppercase font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800"
          >
            ×2
          </button>

          {/* Button to reset the counter */}
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 text-white bg-yellow-500 uppercase font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;