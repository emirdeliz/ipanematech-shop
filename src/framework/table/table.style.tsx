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
import { ECellAlign } from './table';

export const Table = styled.table`
  width: 100%;
`;

export const THead = styled.thead`
  padding: 0px ${EPadding.xSmall};
`;

export const TBody = styled.tbody`
`;

export const Tr = styled.tr`
`;

export const Th = styled.th<{ alignContent?: ECellAlign }>`
  text-align: ${props => props.alignContent || ECellAlign.left};
  padding: ${EPadding.xSmall};
  border-top: solid 1px ${props => props.theme.tableBorderColor};
  border-bottom: solid 1px ${props => props.theme.tableBorderColor};
  text-transform: uppercase;
`;

export const Td = styled.td<{ alignContent?: ECellAlign }>`
  text-align: ${props => props.alignContent || ECellAlign.left};
  padding: ${EPadding.xSmall};
`;