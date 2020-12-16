import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space, system } from 'styled-system';
import { defaults } from '../../../SubatomicParticles';
import { H4StyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'primary.default',
      fontFamily: 'OpenSans Regular',
      fontSize: '20px',
      lineHeight: '27px',
      textAlign: 'left',
    },
    get error() {
      return {
        ...this.base,
        color: 'danger.default',
      };
    },
    get light() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Light',
      };
    },
  },
} as VariantArgs);

export const H4: React.FC<H4StyledProps> = styled.h4`
    ${variants}
    ${defaults}
    ${color}
    ${typography}
    ${space}
    ${system({
  textTransform: true,
  textOverflow: true,
  whiteSpace: true
})}
`;

export default H4;


