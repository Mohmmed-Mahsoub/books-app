import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/themeContext";
const ToggleThemeBtn = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  return (
    <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
      Toggle Theme
    </button>
  );
};

export default ToggleThemeBtn;
