import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { ApiFetcher } from "./components/ApiFetcher/ApiFetcher";

function App() {
  return (
    <>
      <Counter
        minimumValue={-100}
        maximumValue={100}
        initialValue={0}
        stepValue={10}
      />
      <Counter
        minimumValue={-50}
        maximumValue={50}
        initialValue={10}
        stepValue={5}
      />
      <Counter
        minimumValue={-25}
        maximumValue={25}
        initialValue={5}
        stepValue={2}
      />
      <ApiFetcher API_URL="http://www.boredapi.com/api/activity/" />
    </>
  );
}

export default App;
