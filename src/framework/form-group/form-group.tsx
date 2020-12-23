/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the form-group.
 * ================================================
 */
import React, { ReactNode } from 'react';
import { Label } from '@framework/index';
import { FormGroupContainer, LabelContainer } from './form-group.style';

interface IFormGroup {
  label?: ReactNode;
  children?: ReactNode;
  noMargin?: boolean;
  direction?: FormGroupDirection;
}

export enum FormGroupDirection {
  column = 'column',
  row = 'row'
}

const renderLabel = (label: ReactNode) => {
  if (!label) {
    return null;
  }

  const isStringLabel = label instanceof String;
  if (isStringLabel) {
    return (
      <Label style={{ display: 'block', fontWeight: 'bold' }}>
        {label}
      </Label>
    );
  }

  return (
    <LabelContainer>{label}</LabelContainer>
  );
}

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com> 
 * @description This is a form component in which you put a label and some kind of
 * input component, be it anything: select, input, textarea, etc...
 *
 * You can specify if the form group is required and a label will get a red asterisk
 * to flag it as obligatory.
 */
export const FormGroup = (props: IFormGroup): JSX.Element => {
  const { label, children, direction, noMargin } = props;
  const isDirectionRow = direction === FormGroupDirection.row; 
  return (
    <FormGroupContainer isDirectionRow={isDirectionRow} noMargin={noMargin}>
      {isDirectionRow ? children: renderLabel(label)}
      {isDirectionRow ? renderLabel(label) : children}
    </FormGroupContainer>
  );
}