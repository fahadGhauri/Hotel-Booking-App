import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkMoodContext = createContext();

function DarkMoodProvider({ children }) {
  const [isDarkMode, setIsDarMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarMode((isDark) => !isDark);
  }

  return (
    <DarkMoodContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkMoodContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkMoodContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside");

  return context;
}
export { DarkMoodProvider, useDarkMode };
