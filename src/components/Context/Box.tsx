import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Used from "../../Used";
export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme Context
       {/* <Used/> */}
    </div>
  
  );
};
