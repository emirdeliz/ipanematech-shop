/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 22 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the col style.
 * ================================================
 */
import styled from 'styled-components';

const ColStyle = styled.div<{ size: string }>`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    ${(props) => {
      let size = '';
      switch (props.size) {
        case '1': size = '8.333333'; break;
        case '2': size = '16.666667'; break;
        case '3': size = '25'; break;
        case '4': size = '33.333333'; break;
        case '5': size = '41.666667'; break;
        case '6': size = '50'; break;
        case '7': size = '58.333333'; break;
        case '8': size = '66.666667'; break;
        case '9': size = '75'; break;
        case '10': size = '83.333333'; break;
        case '11': size = '91.666667'; break;
        case '12': size = '100'; break;
        default: break;
      }

      const isAuto = props.size === 'auto';
      return isAuto ? (`
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      `) : (`
        flex: 0 0 ${size}%;
        max-width ${size}%;
      `);
    }}
  }
`;

export default ColStyle;
