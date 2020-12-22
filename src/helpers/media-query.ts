/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file helpers responsible for defining the media queries 
 * according to W3C and bootstrap.
 * ================================================
 */
import { css } from "styled-components";

/* Extra Small Devices, Phones */
const mobileMedia = (callback: () => any) => css`
  @media only screen and (max-width : 480px) {
    ${callback()}
  }
`;
mobileMedia.size = 480;

/* For everything that is not small devices, phones */
const notMobileMedia = (callback: () => any) => css`
  @media only screen and (min-width : 480px) {
    ${callback()}
  }
`;

/* Small Devices, Small Tablets */
const miniTabletMedia = (callback: () => any) => css`
  @media only screen and (max-width : 768px) {
    ${callback()}
  }
`;
miniTabletMedia.size = 768;

/* Medium Devices, Tablets */
const tabletMedia = (callback: () => any) => css`
  @media only screen and (max-width : 992px) {
    ${callback()}
  }
`;
tabletMedia.size = 992;

/* Medium Devices, Tablets */
const greaterThanTabletMedia = (callback: () => any) => css`
  @media only screen and (min-width : 993px) {
    ${callback()}
  }
`;

/* Desktop */
const lowerThanDesktopMedia = (callback: () => any) => css`
  @media only screen and (max-width : 1200px) {
    ${callback()}
  }
`;

/* Desktop */
const desktopMedia = (callback: () => any) => css`
  @media only screen and (min-width : 1200px) {
    ${callback()}
  }
`;
desktopMedia.size = 1200;

/* Firefox, any version */
const firefoxMedia = (callback: () => any) => `
  @-moz-document url-prefix() {
    ${callback()}
  }
`;

/* IE, 10+ */
const ieMedia = (callback: () => any) => css`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    ${callback()}
  }
`;

export {
  desktopMedia,
  firefoxMedia,
  greaterThanTabletMedia,
  ieMedia,
  lowerThanDesktopMedia,
  miniTabletMedia,
  mobileMedia,
  notMobileMedia,
  tabletMedia,
};
