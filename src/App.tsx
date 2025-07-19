import "./App.css";

// import {LoggedIn} from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
// import { Counter } from "./components/state/Counter";

import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { Box } from "./components/Context/Box";

import { UserContextProvider } from "./components/Context/UserContext";
import { User } from "./components/Context/User";
function App() {
  return (
    <div className="App">
    {/*
    <LoggedIn/>
    <User/>
    <Counter/> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
