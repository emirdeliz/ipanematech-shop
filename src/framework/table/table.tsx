/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table.
 * ================================================
 */
import React, { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import {
  Table as TableStyle,
  THead as THeadStyle,
  TBody as TBodyStyle,
  Tr as TrStyle,
  Td as TdStyle,
  Th as ThStyle
} from './table.style';

export enum ECellAlign {
  left = 'left',
  right = 'right'
}

interface ITd {
  children: ReactNode;
  alignContent?: ECellAlign;
  style?: CSSProperties;
}

interface IRow {
  children: ReactNode
}

interface ITHead {
  children: ReactNode
}

interface ITBody {
  children: ReactNode
}

export interface ITable {
  children: ReactNode
}

const Td = (props: ITd) => {
  return <TdStyle {...props}>{props.children}</TdStyle>
}

const Th = (props: ITd) => {
  return <ThStyle {...props}>{props.children}</ThStyle>
}

const Row = (props: IRow) => {
  return <TrStyle {...props}>{props.children}</TrStyle>
}

const THead = (props: ITHead) => {
  return <THeadStyle {...props}>{props.children}</THeadStyle>
}

const TBody = (props: ITBody) => {
  return <TBodyStyle {...props}>{props.children}</TBodyStyle>
}

export const Table = (props: ITable): JSX.Element => {
  const { children } = props;
  return (
    <TableStyle>
      {children}
    </TableStyle>
  );
}

Table.Th = Th;
Table.Td = Td;
Table.Row = Row;
Table.THead = THead;
Table.TBody = TBody;