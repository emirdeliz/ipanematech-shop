/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the label style.
 * ================================================
 */
import styled from 'styled-components';
import { EMargin } from '@system/theme/margin';

const LabelStyle = styled.label`
  margin-bottom: ${EMargin.xSmall};
  display: inline-block;
`;

export default LabelStyle;
