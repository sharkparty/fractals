// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { get } from 'lodash';
// THEME
import { fonts, colors, variables } from '../../theme';

interface InputProps {
  className?: string;
  inputType?: any;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: any;
  value?: any;
  // onFocus?: () => void;
  // onBlur?: () => void;
  validate?: (e: any) => void;
  format?: (e: any) => void;

  prefix?: any;
  suffix?: any;
}

interface InputState {
  isFocused?: boolean;
  value: string;
  errorMessage?: string;
}

const baseFontWeight = 500;

export const StyledInput = styled.div `
  width: calc(100% - 2rem);
  height: 3rem;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border-radius: ${variables.borderRadius};
  border: solid 1px ${colors.neutrals.ash.light};
  font-family: ${fonts.fontFamily};
  opacity: ${({disabled}: InputProps) => disabled && '0.5'};

  &:active,
  &:focus {
    outline: none;
    border-color: ${({ disabled }: InputProps) => disabled ? colors.neutrals.ash.light : colors.neutrals.ash.dark};
  }

  &.error-border {
    border-color: ${colors.alert.error.base};
  }

  .field-input {
    flex: 1;
    overflow: hidden;
    width: 100%;
    padding: 24px 0 6px ${({ prefix }: InputProps) => !prefix ? '.75rem' : 'calc(1rem - 3px)'};
    font-size: calc(1rem - 2px);
    font-weight: ${baseFontWeight};
    background: none;
    z-index: 1;
    border: none;

    &:active,
    &:focus {
      outline: none;
    }

    &.error-border {
      border-color: ${colors.alert.error.base};
    }
  }

  .input-prefix {
    padding-top: 1rem;
    padding-left: 1rem;
    z-index: 2;
    flex: 0 0 1rem;
  }

  .field-label {
    position: absolute;
    margin-left: ${({ prefix }: InputProps) => !prefix ? '.75rem' : 'calc(3rem - 3px)'};
    margin-top: calc(1rem - 1px);
    top: 0;
    font-size: calc(1rem - 2px);
    font-weight: ${baseFontWeight};
    line-height: 1.29;
    /* TODO: kam figure out how to standardize transitions within elements! */
    transform-origin: 0% 50%;
    transition: all 200ms ease-in-out;
    color: ${colors.neutrals.charcoal.light};
    cursor: text;
  }

  .field-input:focus + .field-input:not([value='']) {
    z-index: 2;
    opacity: 1;
  }

  .field-input:focus + .field-label,
  .field-input:not([value='']) + .field-label {
    z-index: 2;
    transform: scale(0.80) translateY(-.75rem);
    opacity: 0.75;
    cursor: default;
  }

  .error {
    // TODO: kam this is a bad idea... will reorganize everything
    flex: 0 0 100%;
    margin-top: .5rem;
    font-size: .75rem;
    font-weight: ${baseFontWeight};
    color: ${colors.alert.error.base};
  }
`;

export class Input extends React.Component<InputProps> {
  static defaultProps: InputProps = {
    inputType: 'text',
    format: (input?: any) => input,
  };

  readonly state: InputState = {
    value: '',
  };

  render(): React.ReactElement<Input> {
    const {
      label,
      inputType,
      prefix,
      disabled,
    } = this.props;

    const {
      value,
      isFocused,
      errorMessage,
    } = this.state;

    return (
      <StyledInput prefix={prefix} disabled={disabled}>
        {prefix && React.cloneElement(prefix, {
          height: 16,
          width: 16,
          color: colors.neutrals.ash.dark,
          className: 'input-prefix',
        })}
        <input
          type={inputType}
          disabled={disabled}
          onFocus={() => this.setState({ ...this.state, isFocused: true })}
          onBlur={() => this.setState({ ...this.state, isFocused: false })}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
          value={value}
          className={classNames('field-input', { ['error-border']: errorMessage})}
        />
        <label className="field-label">
          {label}
        </label>
        {!isFocused && errorMessage && <div className="error">{errorMessage}</div>}
      </StyledInput>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = get(event, 'target.value', '');

    const errorMessage = this.props.validate && value && this.props.validate(value);
    // TODO: consider removing strictNullChecks to enable defaultProps of functions
    this.setState({
      value: this.props.format ? this.props.format(value) : undefined,
      errorMessage,
    });
  }
}

export default Input;
