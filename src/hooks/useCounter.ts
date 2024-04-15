import { useState } from "react";

export const useCounter = (
  initialValue: number,
  minimalValue: number,
  maximalValue: number,
  stepValue: number
) => {
  //   const initialValue = 0;
  const [x, setX] = useState<number>(initialValue);

  const incrementX = () => {
    if (maximalValue > x) setX(x + 1);
  };

  const decrementX = () => {
    if (minimalValue < x) setX(x - 1);
  };

  const reset = () => {
    setX(initialValue);
  };

  const minValue = () => {
    setX(minimalValue);
  };
  const maxValue = () => {
    setX(maximalValue);
  };

  const isEven = () => {
    if (x % 2) return false;
    else return true;
  };

  const stepUp = () => {
    if (x + stepValue > maximalValue) setX(maximalValue);
    else setX(x + stepValue);
  };
  const stepDown = () => {
    if (x - stepValue < minimalValue) setX(minimalValue);
    else setX(x - stepValue);
  };

  return {
    x,
    incrementX,
    decrementX,
    reset,
    minValue,
    maxValue,
    isEven,
    stepUp,
    stepDown,
  };
};
