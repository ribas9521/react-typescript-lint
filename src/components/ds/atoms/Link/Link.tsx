import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { Link as LinkRouter, } from 'react-router-dom';
import { defaults } from '../../SubatomicParticles';
import { LinkProps } from './types';

const variants = variant({
  prop: "styling",
  variants: {
    base: {
      textDecoration: "none",
      fontFamily: "OpenSans Regular",
      color: "secondary.default",
      transition: "0.3s ease-in-out all",
      cursor: "pointer",
      "&:hover": {
        color: "primary.default",
      },
      "&.active": { color: "primary.default" }
    },
    get baseBold() {
      return {
        ...this.base,
        fontFamily: "OpenSans Semibold",
      };
    },
    get primary() {
      return {
        ...this.base,
        fontFamily: "Gotham Bold",
        color: "primary.default",
        "&:hover": {
          color: "primary.dark",
          "> svg path": {
            fill: "primary.dark",
          },
        },
      };
    },
    get secondary() {
      return {
        ...this.base,
        fontFamily: "Gotham Bold",
        color: "secondary.default",
        "&:hover": {
          color: "secondary.dark",
          "> svg path": {
            fill: "secondary.dark",
          },
        },
      };
    },
    get button() {
      return {
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontFamily: "Gotham Light Regular",
        textDecoration: "none",
        px: "md",
        py: "xxs",
        m: "sm",
        bg: "secondary.default",
        borderRadius: "md",
        color: "secondary.contrast",
        fontSize: 2,
        transition: "0.3s ease-in-out all",
        "&:hover": {
          bg: "pinks.2",
        },
        "&:focus": {
          outline: "solid 0.071rem",
          outlineOffset: "0.142rem",
          outlineColor: "primary.default",
        },
      };
    },
    get admin() {
      return {
        ...this.base,
        color: "#1B2B37",
        "&:hover": {
          color: "#3f51b5",
        },
      };
    },
  },
} as VariantArgs);

export default styled(LinkRouter) <LinkProps>`
    ${variants}
    ${defaults}
    ${props => props.css ?? ''}
`;
