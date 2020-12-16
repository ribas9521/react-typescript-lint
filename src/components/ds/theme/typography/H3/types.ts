import { DefaultStyleProps } from "../../../SubatomicParticles";
import { TypographyProps } from "styled-system";


export type H3StyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'error' | 'baseLight';
};

export interface H1Props { }
