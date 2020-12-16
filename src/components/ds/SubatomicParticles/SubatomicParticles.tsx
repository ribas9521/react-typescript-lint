
import {
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
  variant,
  VariantArgs,
  fontSize,
  grid,
} from 'styled-system';

export const defaults = [
  boxShadow,
  color,
  space,
  flexbox,
  border,
  layout,
  position,
  typography,
  fontSize,
  grid
];

const commonsViews = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const viewType = variant({
  prop: 'styling',
  variants: {
    base: {
      ...commonsViews,
    },
    background: {
      ...commonsViews,
      bg: 'bg',
    },
    row: {
      ...commonsViews,
      flexDirection: 'row',
      '&:focus': {
        outline: 'none',
      },
    },
    column: {
      ...commonsViews,
      flexDirection: 'column',
      '&:focus': {
        outline: 'none',
      },
    },
    grid: {
      ...commonsViews,
      display: 'grid',
      alignItems: 'start',
    },
    overlay: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 999
  },
    baloonLeft: {
      ...commonsViews,
      bg: 'consonance',
      p: '10px',
      boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
      borderTopRightRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      borderTopLeftRadius: '0.25rem',
      '&::after': {
        position: 'absolute',
        content: '""',
        borderWidth: 1,
        borderTop: '10px solid',
        borderTopColor: 'consonance',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        left: '-4%',
        top: 0,
        filter: 'drop-shadow(-1px 2px 1px rgba(0, 0, 0, 0.2))',
        zIndex: -1,
      },
    },
    get baloonRight() {
      return {
        ...this.baloonLeft,
        boxShadow: '-2px 2px 3px rgba(0, 0, 0, 0.2)',
        '&::after': {
          position: 'absolute',
          content: '""',
          borderWidth: 1,
          borderTop: '10px solid',
          borderTopColor: 'consonance',
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          right: '-4%',
          top: 0,
          filter: 'drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.2))',
          zIndex: -1,
        },
      };
    },
  },
} as VariantArgs);
