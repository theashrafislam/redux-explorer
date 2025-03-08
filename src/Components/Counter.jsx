import React from "react";
import Count from "./Count";
import Button from "./Button";
import {useSelector, useDispatch, } from 'react-redux'
import {increment, decrement, incrementByAmount, reset} from '../Redux/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5 items-center justify-center">
      <div className="bg-white shadow-xl p-6 rounded-lg text-center">
        <Count value={count} />
        <div className="flex gap-4 mt-4">
          <Button type="increase" onClick={() => dispatch(increment())} />
          <Button type="decrease" onClick={() =>dispatch(decrement())} />
          <button className="px-4 py-2 text-white bg-black uppercase font-semibold rounded-lg shadow-md transition-all duration-300" onClick={() => dispatch(incrementByAmount(2))}>Multiplied by 2</button>
          <button className="px-4 py-2 text-white uppercase bg-yellow-500 font-semibold rounded-lg shadow-md transition-all duration-300" onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;