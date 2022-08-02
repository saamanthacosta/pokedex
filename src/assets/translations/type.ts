import * as languages from './languages';

export interface TranslationsDefinitions {
  'header:name': string,
  'header-filter:placeholder': string,
  'home:no-pokemons-list': string,
}

export type Translations = Record<
  keyof typeof languages,
  TranslationsDefinitions
>;
