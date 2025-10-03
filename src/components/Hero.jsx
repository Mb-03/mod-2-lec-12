import useCounter from "../hooks/useCounter";

const Hero = () => {
  const { count, decrement, increment, reset } = useCounter(10);

  return (
    <div>
      <h2>Counter from Hero : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Hero;
