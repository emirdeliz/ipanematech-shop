/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for define the translate object
 * =============================================
 */
import { useI18n } from 'next-rosetta';
import { ILocale } from '@i18n/template';

export const useTranslate = (): <X extends ILocale[] | Record<string, ILocale>>(key: string | (string | number)[], params?: X, lang?: string) => string => {
  const i18n = useI18n<ILocale>();
  const { t } = i18n;
  return t;
};