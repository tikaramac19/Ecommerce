import { useState, useEffect } from "react";

const useCounter = (farwards:boolean) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(farwards){
            setCounter((counter) => counter + 1);

        }else{
      setCounter((counter) => counter - 1);

        }
    }, 1000);

    return ()=> clearInterval(interval)
  }, []);

  return counter;
};

export { useCounter };
