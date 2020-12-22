/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the theme of the app.
 * The theme can be light or dark. All colors are defined in hsl format.
 * =============================================
 */
import { ELightColors, EDarkColors } from './colors';

export enum EThemeType {
  light = 'light',
  dark = 'dark'
}

export interface ITheme {
  bodyBackgroundColor: ELightColors|EDarkColors,
  inputCheckboxBorderColor: ELightColors|EDarkColors,
  inputCheckboxBrandColor: ELightColors|EDarkColors,
  tooltipBackgroundColor: ELightColors|EDarkColors,
  tooltipTextColor: ELightColors|EDarkColors,
  tableBorderColor: ELightColors|EDarkColors
} 

export const LightTheme: ITheme = {
  bodyBackgroundColor: ELightColors.bodyBackgroundColor,
  inputCheckboxBorderColor: ELightColors.inputCheckboxBorderColor,
  inputCheckboxBrandColor: ELightColors.inputCheckboxBrandColor,
  tooltipBackgroundColor: ELightColors.tooltipBackgroundColor,
  tooltipTextColor: ELightColors.tooltipTextColor,
  tableBorderColor: ELightColors.tableBorderColor
}

export const DarkTheme: ITheme = {
  bodyBackgroundColor: EDarkColors.bodyBackgroundColor,
  inputCheckboxBorderColor: EDarkColors.inputCheckboxBorderColor,
  inputCheckboxBrandColor: EDarkColors.inputCheckboxBrandColor,
  tooltipBackgroundColor: EDarkColors.tooltipBackgroundColor,
  tooltipTextColor: EDarkColors.tooltipTextColor,
  tableBorderColor: EDarkColors.tableBorderColor
}
