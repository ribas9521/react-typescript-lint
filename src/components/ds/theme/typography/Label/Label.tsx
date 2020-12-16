import React from "react";
import styled from "styled-components";
import { variant, VariantArgs, color, typography, space, system } from "styled-system";
import { defaults } from "../../../SubatomicParticles";
import { LabelStyledProps } from "./types";

const variants = variant({
  prop: "styling",
  variants: {
    base: {
      fontFamily: "OpenSans Regular",
      color: "text.dark",
      textAlign: "left",
      fontSize: "14px",
      whiteSpace: "nowrap",
      width: "100%",
    },
    get error() {
      return {
        ...this.base,
        color: "danger.default",
      };
    },
  },
} as VariantArgs);

export const Label: React.FC<LabelStyledProps> = styled.label<LabelStyledProps>`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
    ${system({
      whiteSpace: true,
    })}
    ${(props) => props.css ?? ""}
`;

export default Label;
