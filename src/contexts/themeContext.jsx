import React, { createContext, useState, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";
export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, {
    isThemeLight: true,
    light: { ui: "#d5d5d5", bg: "#ececec", textColor: "#010101" },
    dark: { ui: "#000", bg: "#333", textColor: "#fff" },
  });
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
