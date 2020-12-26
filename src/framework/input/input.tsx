/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the input.
 * ================================================
 */
import { ChangeEventHandler } from 'react';

export interface IInput {
  onChange: ChangeEventHandler<HTMLInputElement>;
}