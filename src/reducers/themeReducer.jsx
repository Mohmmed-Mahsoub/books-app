export const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        isThemeLight: !state.isThemeLight,
        light: { ui: "#d5d5d5", bg: "#ececec", textColor: "#010101" },
        dark: { ui: "#000", bg: "#333", textColor: "#fff" },
      };
    default:
      return state;
  }
};
