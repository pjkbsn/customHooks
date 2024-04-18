import { useToggle } from "../../hooks/useToggle";

type ToggleProps = {
  positive: string;
  negative: string;
  startValue: boolean;
};

export const Toggle = ({ positive, negative, startValue }: ToggleProps) => {
  const { value, toggleValue } = useToggle(startValue);

  return (
    <>
      <button onClick={() => toggleValue()}>Toggle</button>
      {value ? <h1>{positive}</h1> : <h1>{negative}</h1>}
    </>
  );
};
