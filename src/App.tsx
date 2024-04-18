import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { ApiFetcher } from "./components/ApiFetcher/ApiFetcher";
import { Toggle } from "./components/Toggle/Toggle";
import { Debounce } from "./components/Debounce/Debounce";

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
      <Toggle positive="True" negative="False" startValue={true} />
      <Debounce initialValue={5} delay={2000} />
    </>
  );
}

export default App;
