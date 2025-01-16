import { SUPPORTED_LANGUAGES } from './config';

/* eslint-disable prettier/prettier */
export interface LanguageModal {
  welcome: string;
  logout: string;
  help: string;
}

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export type TranslationKey = keyof LanguageModal;
