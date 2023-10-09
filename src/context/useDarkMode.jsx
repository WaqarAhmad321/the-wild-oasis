import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export default function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside the DarkModeProvider.");

  return context;
}
