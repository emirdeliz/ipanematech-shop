/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the select style.
 * ================================================
 */
import styled from 'styled-components';
import FormControlStyle from '@framework/form-control/form-control.style';
import { EPadding } from '@system/theme/padding';

const SelectStyle = styled.select`
  ${FormControlStyle}
  padding: 0px ${EPadding.xSmall};
  height: 33px;
`;
SelectStyle.displayName = 'SelectStyle';

const OptionStyle = styled.option``;

export {
  SelectStyle,
  OptionStyle,
};
