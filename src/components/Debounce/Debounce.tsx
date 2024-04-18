import { useDebounce } from "../../hooks/useDebounce";

type DebounceProps = {
  initialValue: number;
  delay: number;
};

export const Debounce = ({ initialValue, delay }: DebounceProps) => {
  const { count, toggleDebounce } = useDebounce(initialValue, delay);

  return (
    <>
      <button onClick={() => toggleDebounce()}>Increment</button>
      <p>{count}</p>
    </>
  );
};
