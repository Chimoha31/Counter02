import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

function App() {
  // useSelector => counterSlice.jsのstate(value)にアクセスする為のHooks。
  const count = useSelector((state) => state.counter.value); //⇨このcounterはstore.jsのcounterを指す。
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="App">
      <h1>count: {count}</h1>
      {/* dispatch()はAction＝counterSlice.jsの中に定義したincrementやdecrementをstoreに通知するためのHooks */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
        Add
      </button>
    </div>
  );
}

export default App;
