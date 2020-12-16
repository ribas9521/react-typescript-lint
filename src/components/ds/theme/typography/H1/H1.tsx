import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { defaults } from '../../../SubatomicParticles';
import { H1StyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      fontFamily: 'OpenSans Semibold',
      color: 'secondary.default',
      textAlign: 'left',
      fontSize: '40px',
      lineHeight: '54px',
    },
    get light() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Light',
      };
    },
    get error() {
      return {
        ...this.base,
        color: 'reds.1',
      };
    },
    get baseLight() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Regular',
      };
    },
  },
} as VariantArgs);

export const H1: React.FC<H1StyledProps> = styled.h1`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H1;
