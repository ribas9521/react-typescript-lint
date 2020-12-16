import { DefaultStyleProps } from "../../../SubatomicParticles";
import { TypographyProps } from "styled-system";


export type H1StyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'error' | 'baseLight' | 'light';
};

export interface H1Props { }
