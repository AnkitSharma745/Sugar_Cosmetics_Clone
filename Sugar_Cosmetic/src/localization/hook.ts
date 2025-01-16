import { useTranslation } from 'react-i18next';
import { TranslationKey } from '@/localization/types';

const useTranslationHook = () => {
  const { t } = useTranslation();

  const translate = (key: TranslationKey): string => {
    return t(key);
  };

  return { translate };
};

export default useTranslationHook;
