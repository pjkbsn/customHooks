import { useEffect, useRef, useState } from "react";

export const useDebounce = (initialValue: number, delay: number) => {
  const [count, setCount] = useState(initialValue);
  const timeoutRef = useRef<number | null>(null);

  const toggleDebounce = () => {
    setCount(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        alert(count + 1);
      }, delay);

      return count + 1;
    });
  };
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return { count, toggleDebounce };
};
