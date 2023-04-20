import { useState, useRef } from "react";

export const App = () => {
  const [stateCount, setStateCont] = useState(0);
  const refCount = useRef(0);
  let letCount = 0;

  const countState = () => {
    setStateCont((prev) => prev + 1);
  };
  const countRef = () => {
    refCount.current++;
  };
  const countLet = () => {
    letCount++;
  };

  return (
    <>
      <button onClick={countState}>count State</button>
      <button onClick={countRef}>count Ref</button>
      <button onClick={countLet}>count Let</button>
      <p>state:{stateCount}</p>
      <p>ref:{refCount.current}</p>
      <p>let:{letCount}</p>
    </>
  );
};
