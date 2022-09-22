import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme // еще раз перечитать про кастомный атрибут
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
