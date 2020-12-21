import FormControlStyle from '@framework/form-control/form-control.style';
import styled from 'styled-components';

const SelectStyle = styled.select`
  ${FormControlStyle}
  padding: 0px 12px;
  height: 33px;
`;
SelectStyle.displayName = 'SelectStyle';

const OptionStyle = styled.option``;

export {
  SelectStyle,
  OptionStyle,
};
