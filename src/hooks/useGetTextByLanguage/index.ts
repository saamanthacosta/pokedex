import { TranslationsDefinitions } from "../../assets/translations";
import { en, pt } from "../../assets/translations";

interface IDictionary {
  [keyof: string]: TranslationsDefinitions;
}

export const dictionary: IDictionary = {
  en: en,
  "pt-BR": pt,
} as const;

const languages = Object.keys(dictionary);

const useGetTextByLanguage = function () {
  const userLanguage = window.navigator.language;
  const userLanguages = window.navigator.languages;

  const isUserLanguageAvailable = languages.includes(userLanguage);
  const availableLanguageInUserLangauges = userLanguages.find((language) =>
    languages.includes(language)
  );

  const language = isUserLanguageAvailable
    ? userLanguage
    : availableLanguageInUserLangauges || "en";

  const translations: TranslationsDefinitions = dictionary[language];

  const getTextByLanguage = (
    translationKey: keyof TranslationsDefinitions,
    translationParams: Record<string, unknown> = {}
  ) => {
    const translatedTextKey =
      translations?.[translationKey] ?? translationKey.toString();

    return translatedTextKey.replace(
      /\{\{(.*?)\}\}/g,
      (match: string, captureGroup: string) =>
        String(translationParams[captureGroup]) ?? match
    );
  };

  return getTextByLanguage;
};

export default useGetTextByLanguage;
