/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the form-group style.
 * ================================================
 */
import styled from 'styled-components';
import { EMargin } from '@system/theme/margin';

const FormGroupContainer = styled.div<{ isDirectionRow: boolean }>`
  display: flex;
  flex-direction: ${props => props.isDirectionRow ? 'row' : 'column'};
  margin-bottom: ${EMargin.small};
  align-items: center;
  text-align: left;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export {
  FormGroupContainer,
  LabelContainer
}
