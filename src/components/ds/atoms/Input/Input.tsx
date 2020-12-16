import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { variant, VariantArgs } from 'styled-system';
import { defaults } from '../../SubatomicParticles';
import { InputStyledProps } from './index';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid',
      borderColor: 'text.dark',
      bg: 'transparent',
      color: 'text.dark',
      fontFamily: 'OpenSans Regular',
      fontSize: '14px',
      outline: 'none',
      opacity: 1,
      py: '10px',
      borderBottomColor: 'primary.default !important',
      transition: '0.3s ease-in-out all',
      '&:focus': {
        borderColor: 'primary.default',
      },
      '&:disabled': {
        color: 'grays.default',
      },
      '&:-webkit-autofill': {
        '-webkit-text-fill-color': (props: any) => props.colors.secondary.default,
        '-webkit-box-shadow': (props: any) =>
          `0 0 0px 1000px ${props.colors.primary.constrast} inset`,
      },
      '::-webkit-input-placeholder': {
        color: 'grays.default',
      },
      '::-moz-placeholder': {
        color: 'grays.default',
      }
    },
    get error() {
      return {
        ...this.base,
        borderColor: 'red',
      };
    },
    get disabled() {
      return {
        ...this.base,
        opacity: 0.5,
      };
    },
  },
} as VariantArgs);

const Input: React.FC<InputStyledProps> = styled(InputMask)`
  ${variants}
  ${defaults}
`;

export default Input;
