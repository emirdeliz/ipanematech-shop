/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the label style.
 * ================================================
 */
import styled from 'styled-components';
import { EFontSize } from '@system/theme/font-size';
import { ELabelSize } from './label';

const LabelStyle = styled.label<{ size?: ELabelSize }>`
  display: inline-block;
  font-size: ${props => {
    switch(props.size) {
      case ELabelSize.small:
        return EFontSize.small;
      case ELabelSize.large:
        return EFontSize.large;
      default:
        return EFontSize.normal;
    }
  }}
`;

export default LabelStyle;
