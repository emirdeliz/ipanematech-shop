/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the form-control style.
 * ================================================
 */
import { EFontSize } from '@system/theme/font-size';
import { EPadding } from '@system/theme/padding';
import { EBorderRadius } from '@system/theme/border-radius';
import styled from 'styled-components';

const FormControl = styled.div`
  outline-style: none;
  box-shadow: none;
  width: 100%;
  display: block;
  padding: ${EPadding.xxSmall} ${EPadding.xSmall};
  line-height: 1.25;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: ${EBorderRadius.normal};
  font-size: ${EFontSize.normal};
`;

export default FormControl;
