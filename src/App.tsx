
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
import {PersonList} from './components/PersonList'
function App() {
  const name="Roshik";
  const messageCount = 20;
  const isLoggedIn = true;
  const names={
    first: "bruce",
    last: "wayne",
  };


  const nameList = [
    {first: 'bruce',
      last: 'wayne',
    },
    {first: 'roshik',
      last:'Maharjan'
    },
    {
      first:'Ragini',
      last:'Maharjan',
    }
  ]
  return (
    <div className="App">
      <Greet name={name} messageCount={messageCount} isLoggedIn={isLoggedIn}/>
      <Person names={names}/>
      <PersonList nameList = {nameList}/>
    </div>
  );
}

export default App;
