import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mood, setMood] = useState("light");

  const toggle = () => {
    setMood((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mood }}>
      <div className={`theme ${mood}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
