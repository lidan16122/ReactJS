import Home from "./components/home";
import { FunctionInSfc } from "./components/functionInSfc";
import FnWithArgInCc from "./components/fnWithArgInCC";
import FnWithArgsSfc from "./components/fnWithArgSfc";
import PassingEventToFn from "./components/passingEventToFn";
import FatherCompSFC from "./components/fatherSfc";
import FatherCompCC from "./components/fatherCompCC";
import LifeCycleHooks from "./components/lifeCycleHooks";

function App() {
  return (
    <div className="app">
      <Home />
      <FunctionInSfc />
      <FnWithArgInCc />
      <FnWithArgsSfc />
      <PassingEventToFn />
      <FatherCompSFC />
      <FatherCompCC />
      <LifeCycleHooks />
    </div>
  );
}

export default App;
