import React from "react";
import Count from "./Count";
import Button from "./Button";
import { useDispatch, } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../Redux/counterSlice'

const Counter = () => {
  // useSelector hook to access the current state of 'counter' in the Redux store
  // const count = useSelector((state) => state.counter.value);

  // useDispatch hook to get access to the dispatch function for dispatching actions
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5 items-center justify-center">
      <div className="bg-white shadow-xl p-6 rounded-lg text-center">
        <Count />
        <div className="flex gap-4 mt-4">

          {/* Button to increase counter by 1 */}
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 text-white bg-green-500 uppercase font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Increase
          </button>

          {/* Button to decrease counter by 1 */}
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 text-white bg-red-500 uppercase font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Decrease
          </button>

          {/* Button to multiply counter by 2 */}
          <button
            className="px-4 py-2 text-white bg-black uppercase font-semibold rounded-lg shadow-md transition-all duration-300"
            onClick={() => dispatch(incrementByAmount(2))}
          >
            Multiplied by 2
          </button>

          {/* Button to reset the counter */}
          <button
            className="px-4 py-2 text-white uppercase bg-yellow-500 font-semibold rounded-lg shadow-md transition-all duration-300"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;