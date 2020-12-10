import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/themeContext";
const ToggleThemeBtn = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  const { isThemeLight, light, dark } = theme;
  const themeData = isThemeLight ? light : dark;
  return (
    <button
      className="toggle-theme"
      onClick={() => dispatch({ type: "CHANGE_THEME" })}
      style={{ background: themeData.bg, color: themeData.textColor }}
    >
      Toggle Theme
    </button>
  );
};

export default ToggleThemeBtn;
