/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the tooltip style.
 * ================================================
 */
import { opacity } from '@helpers/animation';
import styled from 'styled-components';
import { EBorderRadius } from '@system/theme/border-radius';

const TooltipContainer = styled.div<{ error?: boolean; color?: string }>`
  animation: ${opacity()} .1s;
  background-color: ${props => props.theme.tooltipBackgroundColor};
  border-radius: ${EBorderRadius.normal};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, .4);
  color: ${props => props.theme.tooltipTextColor};
  font-weight: 400;
  max-width: 300px;
  padding: 10px;
  text-align: center;
  text-align: justify;
`;

const Arrow = styled.div<{ error?: boolean; left?: string; color?: string }>`
  animation: ${opacity()} .1s;
  margin-bottom: 2px;
  position: absolute;
  bottom: -1px;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &:before {
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: ${props => props.theme.tooltipBackgroundColor};
  }

  &:after {
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    bottom: -9px;
    border-top-color: ${props => props.theme.tooltipBackgroundColor};
  }
`;

export {
  TooltipContainer,
  Arrow,
};
