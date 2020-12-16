import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space, system } from 'styled-system';
import { defaults } from '../../../SubatomicParticles';
import { H3StyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'primary.default',
      fontFamily: 'OpenSans Regular',
      fontSize: '24px',
      lineHeight: '44px',
      textAlign: 'left',
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
      };
    },
  },
} as VariantArgs);

export const H3: React.FC<H3StyledProps> = styled.h3`
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

export default H3;


