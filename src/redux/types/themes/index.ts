export type ThemeActionType = {
  type: "toggleDarkTheme" | "listPokemon";
  list?: []
};

export type ThemeInitialStateType = {
  isDarkTheme: boolean;
};
