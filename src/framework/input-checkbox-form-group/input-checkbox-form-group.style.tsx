/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input-checkbox-form-group style.
 * ================================================
 */
import styled from 'styled-components';
import { EMargin } from '@system/theme/margin';

const InputCheckboxFormGroupStyle = styled.div`
  label {
    cursor: pointer;
  }
  
  input[type='checkbox'] {
    margin-right: ${EMargin.xSmall};
  }
`; 

export default InputCheckboxFormGroupStyle;