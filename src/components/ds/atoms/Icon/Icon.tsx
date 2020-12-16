import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { defaults } from '../../SubatomicParticles';
import { IconStyledProps, IconProps } from './index'

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      height: '22px',
      transition: '0.25s linear all',
      width: '22px',
      svg: {
        transition: '0.25s linear all',
        strokeWidth: '1',
        stroke: 'primary.default',
        fill: 'primary.default',
        path: {
          transition: '0.25s linear all',
        },
        circle: {
          transition: '0.25s linear all',
        },
        polygon: {
          transition: '0.25s linear all',
        }
      },
      '&:hover': {
        cursor: 'pointer',
      }
    },
    get baseReverse() {
      return {
        ...this.base,
        svg: {
          stroke: 'secondary.default',
        },
        '&:hover': {
          svg: {
            stroke: 'text.dark'
          }
        }
      };
    },
    active: {
      height: '22px',
      width: '22px',
      svg: {
        strokeWidth: '1',
        stroke: 'secondary.default',
      },
    },
    pointer: {
      height: '22px',
      width: '22px',
      svg: {
        strokeWidth: '1',
        stroke: 'grays.default',
      },
      '&:hover': {
        cursor: 'pointer',
        svg: {
          strokeWidth: '1',
          stroke: 'secondary.default'
        }
      }
    },
    disabled: {
      height: '22px',
      transition: '0.25s linear all',
      width: '22px',
      svg: {
        strokeWidth: '1',
        stroke: 'grays.default',
        fill: 'none',
      },
      '&:hover': {
        cursor: 'default',
        svg: {
          stroke: 'grays.default'
        }
      }
    },
    get baseNone() {
      return {
        ...this.base,
        svg: {
          stroke: 'none',
          fill: 'primary.default',
          '&:hover': {
            cursor: 'default'
          }
        },
      };
    },
    get admin() {
      return {
        ...this.base,
        svg: {
          stroke: '#1B2B37',
          fill: '#1B2B37',
          '&:hover': {
            fill: '#3f51b5',
            stroke: '#3f51b5',
          }
        },
      };
    },
    get adminActive() {
      return {
        ...this.base,
        svg: {
          fill: '#3f51b5',
          stroke: '#3f51b5',
        },
      };
    },
    get adminButton() {
      return {
        ...this.base,
        svg: {
          stroke: '#1B2B37',
          fill: 'none',
        },
      };
    },
  },
} as VariantArgs);

const Style: React.FC<IconStyledProps> = styled.div<IconStyledProps>`
    ${variants}
    ${defaults}
    ${props => props.css ?? ''}
`;

const Icon: React.FC<IconProps> = props => (
  <Style {...props}>
    {props.children}
  </Style>
)

export default Icon;
