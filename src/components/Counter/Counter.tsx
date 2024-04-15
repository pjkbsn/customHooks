import { useCounter } from "../../hooks/useCounter";

type CounterProps = {
  minimumValue: number;
  maximumValue: number;
  initialValue: number;
  stepValue: number;
};

export const Counter = ({
  minimumValue,
  maximumValue,
  initialValue,
  stepValue,
}: CounterProps) => {
  // exempel på hur en hook kan användas => const [x, setX] = useState(0);
  const {
    x,
    incrementX,
    decrementX,
    reset,
    minValue,
    maxValue,
    isEven,
    stepUp,
    stepDown,
  } = useCounter(initialValue, minimumValue, maximumValue, stepValue);

  // incrementX();
  return (
    <>
      <h1>Hook demo</h1>
      <button onClick={decrementX}>Decrement</button>
      <button onClick={stepDown}>-{stepValue}</button>
      <button onClick={minValue}>Min value</button>
      <p>{x}</p>
      <p>Number is: {isEven() ? "Even" : "Odd"}</p>
      <button onClick={incrementX}>Increment</button>
      <button onClick={stepUp}>+{stepValue}</button>
      <button onClick={maxValue}>Max value</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
