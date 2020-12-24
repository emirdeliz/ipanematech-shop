/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This hook is responsible for keep the app theme
 * =============================================
 */
import { useEffect, useState, useCallback } from 'react';
import { EThemeType, LightTheme, DarkTheme, ITheme } from '@system/theme/theme';

interface IUseTheme {
  themeType: EThemeType;
  themeToggler: () => void;
  theme: ITheme;
}

export const useTheme = (): IUseTheme => {
  const [themeType, setThemeType] = useState<EThemeType>(EThemeType.light);

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to update the theme in the state
   * @param mode: selected theme
   */
  const _setMode = (mode: EThemeType) => {
    window.localStorage.setItem('themeType', mode);
    setThemeType(mode);
  };

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to check if the current theme is light 
   */
  const _isCurrentLight = () => themeType === EThemeType.light;

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to update the theme 
   */
  const themeToggler = () => {
    _isCurrentLight() ? _setMode(EThemeType.dark) : _setMode(EThemeType.light);
  };

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description This method is used to get the selected theme 
   */
  const getTheme = useCallback(() => {
    return _isCurrentLight() ? LightTheme : DarkTheme;
  }, [themeType]);

  /**
   * @created on Mon Dec 23 2020
   * @author Emir Marques - <emirdeliz@gmail.com>
   * @description TThis method is used to initialize the hook 
   */
  const _initialize = () => {
    const localTheme = window.localStorage.getItem('themeType');
    localTheme && setThemeType(localTheme as EThemeType);
  }

  useEffect(() => {
    _initialize();
  }, []);

  return { themeType, themeToggler, theme: getTheme() };
};