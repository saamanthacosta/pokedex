import * as languages from './languages';

export interface TranslationsDefinitions {
}

export type Translations = Record<
  keyof typeof languages,
  TranslationsDefinitions
>;
