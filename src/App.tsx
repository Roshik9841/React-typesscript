import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
function App() {
  const name = "Roshik";
  const messageCount = 20;
  const isLoggedIn = true;
  const names = {
    first: "bruce",
    last: "wayne",
  };

  const nameList = [
    { first: "bruce", last: "wayne" },
    { first: "roshik", last: "Maharjan" },
    {
      first: "Ragini",
      last: "Maharjan",
    },
  ];
  return (
    <div className="App">
      <Heading>Placeholder text</Heading>
      <Greet name={name} messageCount={messageCount} isLoggedIn={isLoggedIn} />
      <Person names={names} />
      <PersonList nameList={nameList} />
      <Status status="error" />
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Button handleClick= {(event,id)=>{
        console.log("BUtton clicked",event);
      }}/>
      <Input value='aasd' handleChange={(event)=>console.log(event)}/>
    </div>
  );
}

export default App;
