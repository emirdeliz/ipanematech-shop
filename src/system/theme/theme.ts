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
  body: ELightColors|EDarkColors,
  inputCheckboxBorderColor: ELightColors|EDarkColors,
  inputCheckboxBrandColor: ELightColors|EDarkColors,

  text: ELightColors|EDarkColors,
  toggleBorder: ELightColors|EDarkColors,
  background: ELightColors|EDarkColors
} 

export const LightTheme: ITheme = {
  body: ELightColors.body,
  inputCheckboxBorderColor: ELightColors.inputCheckboxBorderColor,
  inputCheckboxBrandColor: ELightColors.inputCheckboxBrandColor,

  text: ELightColors.text,
  toggleBorder: ELightColors.toggleBorder,
  background: ELightColors.background,
}

export const DarkTheme: ITheme = {
  body: EDarkColors.body,
  inputCheckboxBorderColor: EDarkColors.inputCheckboxBorderColor,
  inputCheckboxBrandColor: EDarkColors.inputCheckboxBrandColor,

  text: EDarkColors.text,
  toggleBorder: EDarkColors.toggleBorder,
  background: EDarkColors.background,
}

// enum EColors {
//   navbarBackgroundColor    = 'hsl(210, 12%, 16%)',
//   navColor                 = 'hsl(0, 0%, 100%)',
//   logoGithub               = 'hsl(0, 0%, 100%)',
//   loading                  = 'hsl(210, 12%, 16%)',
//   searchIcon               = 'hsl(210, 12%, 16%)',
//   dropdownSearchBorder     = 'hsl(0, 0%, 0%)',
//   dropdownSearchBackground = 'hsl(0, 0%, 100%)',
//   dropdownSearchMenu       = 'hsl(0, 0%, 100%)',
//   dropdownSearchMenuHover  = 'hsl(0, 0%, 87%)',
//   dropdownSearchMenuColor  = 'hsl(0, 0%, 0%)',
//   dropdownSearchMenuLabel  = 'hsl(212, 97%, 43%)',
//   dropdownSearchMenuDesc   = 'hsl(212, 9%, 38%)',
// }
