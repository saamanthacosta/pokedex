import * as languages from "./languages";

export interface TranslationsDefinitions {
  "header:name": string;
  "header-filter:placeholder": string;
  "header-filter:accessibility": string;
  "home:no-pokemons-list": string;
  "header-switchtheme:accessibility": string;
  "card:pokemon": string;
  "icon:fire": string;
  "icon:flying": string;
  "icon:ice": string;
  "icon:psychic": string;
  "icon:water": string;
  "icon:ground": string;
  "icon:rock": string;
  "icon:electric": string;
  "icon:grass": string;
  "icon:poison": string;
  "icon:bug": string;
  "icon:fighting": string;
  "icon:dragon": string;
  "icon:ghost": string;
  "icon:dark": string;
  "icon:light": string;
}

export type Translations = Record<
  keyof typeof languages,
  TranslationsDefinitions
>;
