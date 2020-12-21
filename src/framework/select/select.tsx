import React from 'react';
import {
  OptionStyle,
  SelectStyle,
} from './select.style';

/**
 * Props for options.
 */
interface IOption {
  value: any;
  disabled?: boolean;
  children?: any;
}

/**
 * Props.
 */
interface ISelect {
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectRef?: any;
  value: any;
  style?: React.CSSProperties;
  children?: any;
}

/**
 * It's the default HTML combo with the style.
 *
 * <Select value=''>
 *   <Select.Option value='razor-sharp'>aaa</Select.Option>
 * </Select>
 */
class Select extends React.Component<ISelect> {

  /**
   * The option that should be used inside this select.
   */
  public static Option: React.SFC<IOption> = (props: IOption) => (
    <OptionStyle {...props}>
      {props.children}
    </OptionStyle>
  )

  public render() {
    const { props } = this;
    return (
      <SelectStyle
        {...props}
        className=''
        ref={props.selectRef}
      >
        {props.children}
      </SelectStyle>
    );
  }
}

export default Select;
