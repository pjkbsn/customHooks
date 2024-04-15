import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
  // exempel på hur en hook kan användas => const [x, setX] = useState(0);
  const [x, incrementX] = useCounter();

  // incrementX();
  return (
    <>
      <h1>Hook demo</h1>
      <p>{x}</p>
      <button onClick={incrementX}>Increment</button>
    </>
  );
}

export default App;
