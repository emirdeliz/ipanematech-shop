/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the global style of the app.
 * =============================================
 */
import { createGlobalStyle} from 'styled-components';
import { ITheme } from './theme';
export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.body};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;