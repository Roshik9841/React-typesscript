import "./App.css";
// import Hook from './Hook'
// import Used from "./Used";
import { Counter } from "./components/class/Counter";
import { List } from "./components/class/List";
function App() {
  return (
    <div className="App">
    {/* <Used/> */}
      {/* <Hook/> */}
      <Counter message={"The count value is"}/>
      <List items={['roshik','ragini','dasdas']}
      onClick= {(item)=>console.log(item)}/>

      <List items={[1,2,41]}
      onClick= {(item)=>console.log(item)}/>
    </div>
  );
}

export default App;
