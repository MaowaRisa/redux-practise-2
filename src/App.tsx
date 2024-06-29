import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import "./App.css";

import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const renderLines = (count: number) => {
    const arr = [];
    const containerNumber = Math.floor(count / 5);
    const remainNumber = count % 5;

    console.log(remainNumber);
    for (let i = 0; i < containerNumber; i++) {
      arr.push(
        <div className="line-container">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
          <div className="diagonal-line"></div>
        </div>
      );
    }
    const normalLines = [];
    if (remainNumber !== 5) {
      for (let i = 0; i < remainNumber; i++) {
        normalLines.push(
          <div className="line-container">
            <div className={"line line"+ i}></div>
          </div>
        );
      }
    }
    return arr;
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex border p-10 border-purple-500 rounded-md bg-slate-50">
        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 py-2 rounded-md font-semibold bg-green-400 text-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md font-semibold bg-green-400 text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md font-semibold bg-purple-400 text-white"
        >
          Decrement
        </button>
      </div>
      <div className="flex gap-8">{renderLines(count)}</div>
    </div>
  );
}

export default App;
