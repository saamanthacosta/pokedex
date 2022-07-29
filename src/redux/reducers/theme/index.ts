import { ThemeInitialStateType, ThemeActionType } from "./../../types";

const localStorageKey = "isDarkTheme";
const isDarkTheme = localStorage.getItem(localStorageKey);

const initialState: ThemeInitialStateType = {
  isDarkTheme: isDarkTheme ? JSON.parse(isDarkTheme) : false,
};

const themeReducer = (state = initialState, action: ThemeActionType) => {
  switch (action.type) {
    case "toggleDarkTheme":
      localStorage.setItem(localStorageKey, JSON.stringify(!state.isDarkTheme));
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

export default themeReducer;
