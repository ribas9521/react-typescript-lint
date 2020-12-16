import React from "react";
import styled from "styled-components";
import { variant, VariantArgs } from "styled-system";
import { defaults } from "../SubatomicParticles";
import { ButtonProps } from "./index";

const commonsButtons = {
  alignItems: "center",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "OpenSans Semibold",
  fontSize: "13px",
  justifyContent: "center",
  outline: "none",
  padding: ".6rem",
  position: "relative",
  transition: "0.3s ease-in-out all",
};

const variants = variant({
  prop: "styling",
  variants: {
    base: {
      ...commonsButtons,
      bg: "transparent",
      color: "primary.default",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    primary: {
      ...commonsButtons,
      bg: "primary.default",
      color: "text.light",
      "&:hover": {
        bg: "primary.dark",
      },
    },
    get disabled() {
      return {
        ...this.primary,
        bg: "disabled",
        cursor: 'default',
        opacity: .6,
        "&:hover": {
          bg: "disabled",
        }
      }
    },
    outline: {
      ...commonsButtons,
      bg: "transparent",
      border: "1px solid",
      borderColor: "primary.default",
      color: "primary.default",
      "&:hover": {
        bg: "primary.dark",
        borderColor: "primary.dark",
        color: "text.light",
      },
    },
    get outlineAdmin() {
      return {
        ...this.outline,
        bg: "#fff",
        borderColor: "#3f51b5",
        color: "#3f51b5",
        borderRadius: "4px",
        px: "25px",
        "&:hover": {
          bg: "#3f51b5",
          color: "#fff",
        },
      }
    },
    get tab() {
      return {
        ...this.base,
        borderBottom: '2px solid',
        borderColor: 'transparent',
        borderRadius: '0px',
        '&:hover': {
          textDecoration: 'none',
        },
        '&.active': {
          borderColor: 'primary.default',
        }
      };
    },
  },
} as VariantArgs);

export const Style: React.FC<ButtonProps> = styled.button<ButtonProps>`
    ${variants}
    ${defaults}
    ${(props) => props.css ?? ""}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onFocus,
  onBlur,
  ...props
}) => {
  const [focused, set] = React.useState(false);
  const toggleState = () => set((prevState) => !prevState);
  return (
    <Style
      className={focused ? "focused" : ""}
      onFocus={(e) => {
        toggleState();
        onFocus && onFocus(e);
      }}
      onBlur={(e) => {
        toggleState();
        onBlur && onBlur(e);
      }}
      {...props}
    >
      {children}
    </Style>
  );
};

export default Button;
