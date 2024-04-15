import { useState } from "react";

export const useCounter = () => {
  const [x, setX] = useState<number>(0);

  const incrementX = () => {
    setX(x + 1);
  };

  return [x, incrementX];
};
