import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
const ToggleContext = createContext();

export function useToggleContext() {
  return useContext(ToggleContext);
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  function changeTheme() {
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ToggleContext.Provider value={changeTheme}>
          {children}
        </ToggleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
