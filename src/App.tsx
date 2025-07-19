import "./App.css";
// import Used from "./Used";
import {LoggedIn} from "./components/state/LoggedIn";
import { User } from "./components/state/User";
function App() {

  return (
   
    <div className="App">
       {/* <Used/> */}
    <LoggedIn/>
    <User/>
    </div>
  );
}

export default App;
