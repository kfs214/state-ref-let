import { useState, useRef } from "react";

const Content = () => {
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
    <div>
      <button onClick={countState}>count State</button>
      <button onClick={countRef}>count Ref</button>
      <button onClick={countLet}>count Let</button>
      <p>state:{stateCount}</p>
      <p>ref:{refCount.current}</p>
      <p>let:{letCount}</p>
    </div>
  );
};

export const App = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const toggleShouldRender = () => {
    setShouldRender((prev) => !prev);
  };

  return (
    <>
      <div>
        <button onClick={toggleShouldRender}>
          {shouldRender ? "unmount" : "mount"}
        </button>
      </div>

      {shouldRender && <Content />}
    </>
  );
};
