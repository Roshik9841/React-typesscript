import "./App.css";
// import Used from "./Used";
import {LoggedIn} from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
function App() {

  return (
   
    <div className="App">
       {/* <Used/> */}
    <LoggedIn/>
    <User/>
    <Counter/>

    </div>
  );
}

export default App;
