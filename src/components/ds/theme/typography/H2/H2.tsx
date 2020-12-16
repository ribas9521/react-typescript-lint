import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { defaults } from '../../../SubatomicParticles';
import { H2StyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'secondary.default',
      fontFamily: 'OpenSans Regular',
      fontSize: '32px',
      lineHeight: '44px',
    },
    get bold() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Bold',
      };
    },
    get error() {
      return {
        ...this.base,
        color: 'reds.1',
      };
    },
    get light() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Light',
        fontSize: '22px',
      lineHeight: '30px',
      };
    },
  },
} as VariantArgs);

export const H2: React.FC<H2StyledProps> = styled.h2`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H2;


