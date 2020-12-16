import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space, system } from 'styled-system';
import { defaults } from '../../../SubatomicParticles';
import { PStyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      fontFamily: 'OpenSans Light',
      color: 'text.dark',
      fontSize: '16px',
      lineHeight: '22px',
      textAlign: 'left',
      '&.active': {
        color: 'text.light',
      }
    },
    get error() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Regular',
        color: 'danger.default',
      };
    },
    get regular() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Regular',
      };
    },
    get bold() {
      return {
        ...this.base,
        fontFamily: 'OpenSans Semibold',
      };
    },
    get baseDot() {
      return {
        ...this.base,
        padding: '0 0 0 40px',
        position: 'relative',
        '&:before': {
          content: '·',
          display: 'block',
          height: '10px',
          fontSize: '30px',
          left: '0px',
          position: 'absolute',
          top: '0px',
          width: '10px',
        }
      };
    },
    info: {
      fontFamily: 'OpenSans Regular',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '120px',
      whiteSpace: 'nowrap',
      color: 'contrast',
      fontSize: '0.9rem',
      marginBottom: '0px',
      textAlign: 'center',
    },
    get baseEllipsis() {
      return {
        ...this.base,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    },
  },
} as VariantArgs);

export const P: React.FC<PStyledProps> = styled.p`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
    ${system({
  textTransform: true,
})}
`;

export default P;
