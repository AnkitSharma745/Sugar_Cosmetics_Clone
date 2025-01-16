import { SupportedLanguage } from '@/localization/types';
import i18n from './index';
import { SUPPORTED_LANGUAGES } from './config';

export const changeLanguage = async (
  language: SupportedLanguage
): Promise<void> => {
  if (SUPPORTED_LANGUAGES.includes(language)) {
    await i18n.changeLanguage(language);
  } else {
    console.error(`Unsupported language: ${language}`);
  }
};
