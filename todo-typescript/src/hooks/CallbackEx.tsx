import React, { useState, useCallback, useEffect } from "react";

const CallbackEx = () => {
  const [data, setData] = useState<number>(1);

  function calculation(a: number, b: number): any {
    return a + b;
  }

  // usecallback hook only memoize the function
  const memoizeCallback = useCallback(() => calculation(22, 44), [data]);

  useEffect(() => {
    console.log("single call");
  }, [memoizeCallback]);

  return (
    <>
      <div>
        <h3>state data : {data}</h3>
        <button
          onClick={() => {
            setData(data + 1);
          }}
        >
          inc
        </button>
      </div>
    </>
  );
};
export default CallbackEx;
