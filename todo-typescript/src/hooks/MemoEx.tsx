import React, { useCallback, useState, useMemo, useEffect } from "react";
import CallbackEx from "./CallbackEx";
import Child from "./Child";

const MemoEx = () => {
  const [count, setCount] = useState<number>(1);
  const [remember, setRemember] = useState<number>(22);
  let data = 22 + remember;
  let tempdata = useMemo(() => data, [data]);

  useEffect(() => {
    console.log(data);
  }, [tempdata]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
      {count}
      <Child />
      {tempdata}

      <button onClick={() => setRemember(remember + 1)}>change remember</button>

        <h1>useCallback example</h1>
        <CallbackEx />

    </>
  );
};
export default MemoEx;
