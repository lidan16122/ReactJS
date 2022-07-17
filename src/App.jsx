import Home from "./components/home";
import { FunctionInSfc } from "./components/functionInSfc";
import FnWithArgInCc from "./components/fnWithArgInCC";
import FnWithArgsSfc from "./components/fnWithArgSfc";
import PassingEventToFn from "./components/passingEventToFn";

function App() {
  return (
    <div className="app">
      <Home />
      <FunctionInSfc />
      <FnWithArgInCc />
      <FnWithArgsSfc />
      <PassingEventToFn />
    </div>
  );
}

export default App;
