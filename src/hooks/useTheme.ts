/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This hook is responsible for keep the app theme
 * =============================================
 */
import { useEffect, useState, useCallback } from 'react';
import { EThemeType, LightTheme, DarkTheme } from '@system/theme/theme';
export const useTheme = () => {
  const [themeType, setThemeType] = useState<EThemeType>(EThemeType.light);
  const setMode = (mode: EThemeType) => {
    window.localStorage.setItem('themeType', mode);
    setThemeType(mode);
  };

  const isCurrentLight = () => themeType === EThemeType.light;
  const themeToggler = () => {
    isCurrentLight() ? setMode(EThemeType.dark) : setMode(EThemeType.light);
  };

  const getTheme = useCallback(() => {
    return isCurrentLight() ? LightTheme : DarkTheme;
  }, [themeType]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeType');
    localTheme && setThemeType(localTheme);
  }, []);

  return { themeType, themeToggler, theme: getTheme() };
};