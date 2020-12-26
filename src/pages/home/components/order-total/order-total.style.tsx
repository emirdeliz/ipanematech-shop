/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the order-total style.
 * ================================================
 */
import styled from 'styled-components';
import { EMargin } from '@system/theme/margin';
import { EPadding } from '@system/theme/padding';

const orderTotalContainerMaxWidth = 400;
export const OrderTotalStyle = styled.div`
  border: solid 1px ${props => props.theme.homeCardOrderTotalBorderColor};
  background-color: ${props => props.theme.homeCardOrderTotalBackgroundColor};
  margin-top: ${EMargin.normal};
  padding: ${EPadding.small} ${EPadding.small};
  max-width: ${orderTotalContainerMaxWidth}px;
`;

export const OrderTotalLabelStyle = styled.div`
  margin-top: ${EMargin.small};
  margin-bottom: ${EMargin.small};
`;