import FormControl from '@framework/form-control/form-control.style';
import styled from 'styled-components';

/**
 * Container of the input.
 */

const InputText = styled.input`
  ${FormControl}
  width: calc(100% - 24px);
`;

export default InputText;
