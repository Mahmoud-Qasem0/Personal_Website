import React, { createContext, JSX, ReactNode, useEffect } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}): JSX.Element => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
