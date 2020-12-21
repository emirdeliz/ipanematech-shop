import React from 'react';
import LabelStyle from './label.style';

/**
 * The equivalent to the default HTML element.
 *
 * - <label>aaaa</label>
 */

interface ILabel {
  children: any;
  style?: React.CSSProperties;
}

const Label = (props: ILabel) => (
  <LabelStyle {...props}>{props.children}</LabelStyle>
);

export default React.memo(Label);
