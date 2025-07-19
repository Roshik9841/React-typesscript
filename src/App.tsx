import "./App.css";

// import {LoggedIn} from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
// import { Counter } from "./components/state/Counter";

import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { Box } from "./components/Context/Box";
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
    </div>
  );
}

export default App;
