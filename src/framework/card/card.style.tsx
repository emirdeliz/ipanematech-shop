/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the body style.
 * ================================================
 */
import styled from 'styled-components';
import { EPadding } from '@system/theme/padding';

export const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  height: 100%;
  width: 100%;
  padding: ${EPadding.xLarge};
  display: flex;
`;