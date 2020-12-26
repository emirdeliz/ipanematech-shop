/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the division style.
 * ================================================
 */
import styled from 'styled-components';

export const Division = styled.hr`
  border-color: transparent;
  border-top: 1px solid ${props => props.theme.hrBorderColor};
`;