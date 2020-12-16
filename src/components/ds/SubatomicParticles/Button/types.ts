import { HTMLProps } from 'react';
import { TypographyProps, SpaceProps } from "styled-system";
import { DefaultStyleProps } from "../index";

export type ButtonStyledProps = DefaultStyleProps &
  TypographyProps &
  SpaceProps &
  HTMLProps<HTMLButtonElement> & {
    styling?:
    | 'base'
    | 'baseDisabled'
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'outlinePrimary'
    | 'outlinePrimaryDisabled'
    | 'underlined'
    | 'outline'
    | 'outlineAdmin'
    | 'star'
    | 'info'
    | 'success'
    | 'danger'
    | 'tab'
    | 'warning';
    type: 'button' | 'submit' | 'reset';
  };

export interface ButtonProps extends ButtonStyledProps {
  css?: any;
}

export interface PulseProps {
  className: string
}
