/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table style.
 * ================================================
 */
import styled from 'styled-components';
import { EPadding } from '@system/theme/padding';
import { EBorderRadius } from '@system/theme/border-radius';
import { ECellAlign } from './table';

export const Table = styled.table.attrs(() => ({
  className: ''
}))`
  width: 100%;
  border-radius: ${EBorderRadius.small};
  border-collapse: separate; 
  border-spacing: 0;
  border: solid 1px ${props => props.theme.tableBorderColor};
  background-color: ${props => props.theme.tableBackgroundColor};
`;

export const THead = styled.thead`
  th {
    border-bottom: solid 1px ${props => props.theme.tableBorderColor};
  }
`;

export const TBody = styled.tbody`
`;

export const Tr = styled.tr`
`;

export const Th = styled.th<{ alignContent?: ECellAlign }>`
  text-align: ${props => props.alignContent || ECellAlign.left};
  padding: ${EPadding.xSmall};
  text-transform: uppercase;
`;

export const Td = styled.td<{ alignContent?: ECellAlign }>`
  text-align: ${props => props.alignContent || ECellAlign.left};
  padding: ${EPadding.xSmall};
`;