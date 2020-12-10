import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [theme, setThem] = useState({
    isThemeLight: true,
    light: { ui: "#d5d5d5", bg: "#ececec", textColor: "#010101" },
    dark: { ui: "#000", bg: "#333", textColor: "#fff" },
  });
  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
