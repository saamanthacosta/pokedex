import * as languages from './languages';

export interface TranslationsDefinitions {
  'header:name': string,
}

export type Translations = Record<
  keyof typeof languages,
  TranslationsDefinitions
>;
