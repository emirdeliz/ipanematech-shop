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
  // Body
  bodyBackgroundColor: ELightColors|EDarkColors,
  // Input
  inputCheckboxBorderColor: ELightColors|EDarkColors,
  inputCheckboxBrandColor: ELightColors|EDarkColors,
  // Tooltip
  tooltipBackgroundColor: ELightColors|EDarkColors,
  tooltipTextColor: ELightColors|EDarkColors,
  // Table
  tableBorderColor: ELightColors|EDarkColors,
  tableBackgroundColor: ELightColors|EDarkColors,
  // Buttons
  buttonPrimaryBackgroundColor:ELightColors|EDarkColors,
  buttonPrimaryHoverBackgroundColor:ELightColors|EDarkColors,
  buttonPrimaryBorderColor: ELightColors|EDarkColors,
  buttonPrimaryColor: ELightColors|EDarkColors,
  // Hr
  hrBorderColor: ELightColors|EDarkColors,
  // Pages
  homeCardOrderTotalBackgroundColor: ELightColors|EDarkColors,
  homeCardOrderTotalBorderColor: ELightColors|EDarkColors,
} 

export const LightTheme: ITheme = {
  // Body
  bodyBackgroundColor: ELightColors.bodyBackgroundColor,
  // Input
  inputCheckboxBorderColor: ELightColors.inputCheckboxBorderColor,
  inputCheckboxBrandColor: ELightColors.inputCheckboxBrandColor,
  // Tooltip
  tooltipBackgroundColor: ELightColors.tooltipBackgroundColor,
  tooltipTextColor: ELightColors.tooltipTextColor,
  // Table
  tableBorderColor: ELightColors.tableBorderColor,
  tableBackgroundColor: ELightColors.tableBackgroundColor,
  // Buttons
  buttonPrimaryBackgroundColor: ELightColors.buttonPrimaryBackgroundColor,
  buttonPrimaryHoverBackgroundColor: ELightColors.buttonPrimaryHoverBackgroundColor,
  buttonPrimaryBorderColor: ELightColors.buttonPrimaryBorderColor,
  buttonPrimaryColor: ELightColors.buttonPrimaryColor,
  // Hr
  hrBorderColor: ELightColors.hrBorderColor,
  // Pages
  homeCardOrderTotalBackgroundColor: ELightColors.homeCardOrderTotalBackgroundColor,
  homeCardOrderTotalBorderColor: ELightColors.homeCardOrderTotalBorderColor
}

export const DarkTheme: ITheme = {
  // Body
  bodyBackgroundColor: EDarkColors.bodyBackgroundColor,
  // Input
  inputCheckboxBorderColor: EDarkColors.inputCheckboxBorderColor,
  inputCheckboxBrandColor: EDarkColors.inputCheckboxBrandColor,
  // Tooltip
  tooltipBackgroundColor: EDarkColors.tooltipBackgroundColor,
  tooltipTextColor: EDarkColors.tooltipTextColor,
  // Table
  tableBorderColor: EDarkColors.tableBorderColor,
  tableBackgroundColor: EDarkColors.tableBackgroundColor,
  // Buttons
  buttonPrimaryBackgroundColor: EDarkColors.buttonPrimaryBackgroundColor,
  buttonPrimaryHoverBackgroundColor: EDarkColors.buttonPrimaryHoverBackgroundColor,
  buttonPrimaryBorderColor: EDarkColors.buttonPrimaryBorderColor,
  buttonPrimaryColor: EDarkColors.buttonPrimaryColor,
  // Hr
  hrBorderColor: EDarkColors.hrBorderColor,
  // Pages
  homeCardOrderTotalBackgroundColor: EDarkColors.homeCardOrderTotalBackgroundColor,
  homeCardOrderTotalBorderColor: EDarkColors.homeCardOrderTotalBorderColor,
}
