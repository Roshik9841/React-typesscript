import "./App.css";
// import Hook from './Hook'
// import Used from "./Used";
import { Counter } from "./components/class/Counter";
function App() {
  return (
    <div className="App">
    {/* <Used/> */}
      {/* <Hook/> */}
      <Counter message={"The count value is"}/>
    </div>
  );
}

export default App;
