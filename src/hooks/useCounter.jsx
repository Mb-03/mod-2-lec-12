import { useState } from "react";

function useCounter(intialValue = 0) {
  const [count, setCount] = useState(intialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(intialValue);


  return {count, increment, decrement, reset}
}


export default useCounter