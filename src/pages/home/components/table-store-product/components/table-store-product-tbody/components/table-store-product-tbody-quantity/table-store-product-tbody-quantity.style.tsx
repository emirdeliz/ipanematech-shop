/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-tbody-quantity style.
 * ================================================
 */
import styled from 'styled-components';

const TableStoreProductTbodyQuantityStyle = styled.div<{ hideControls?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.hideControls ? 'flex-end' : 'space-between'};
`;

export default TableStoreProductTbodyQuantityStyle;