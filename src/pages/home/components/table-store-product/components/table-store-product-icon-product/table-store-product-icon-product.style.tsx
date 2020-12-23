/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-icon-product style.
 * ================================================
 */
import styled from 'styled-components';
import { EMargin } from '@system/theme/margin';

const svgSize = 40;
export const ProductIconContainer = styled.div`
  width: ${svgSize}px;

  svg {
    max-width: 100%;
    max-height: 100%;
    margin: ${EMargin.none} ${EMargin.xSmall};
  }
`; 