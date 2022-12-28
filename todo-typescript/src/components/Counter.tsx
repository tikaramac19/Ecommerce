import React from "react";
import { CounterProvider } from "../provider/Counter.provider";
import { useCounter } from "../provider/Counter.provider";

const Counter = () => {
  const context = useCounter();
  return (
    <>
      <CounterProvider>
        <h1>{context?.value}</h1>
      </CounterProvider>
    </>
  );
};

export default Counter;
