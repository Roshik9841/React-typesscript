
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
function App() {
  const name="Roshik";
  const messageCount = 20;
  const isLoggedIn = true;
  const names={
    first: "bruce",
    last: "wayne",
  };
  return (
    <div className="App">
      <Greet name={name} messageCount={messageCount} isLoggedIn={isLoggedIn}/>
      <Person names={names}/>
    </div>
  );
}

export default App;
