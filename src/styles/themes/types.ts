export type ThemeTitle = typeof LIGHT_THEME | typeof DARK_THEME;

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export interface Theme {
  title: ThemeTitle;
  palette: {
    navBar: string;
    pokedex: string;
    header: string;
    title: string;
    alert: string;
    greyLight: string;
    background: string;
    backgroundDark: string;
    shadow: string;
  };
}
