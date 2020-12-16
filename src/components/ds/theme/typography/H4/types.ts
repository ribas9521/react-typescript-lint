import { DefaultStyleProps } from "../../../SubatomicParticles";
import { TypographyProps } from "styled-system";


export type H4StyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'error' | 'light';
};

export interface H1Props { }
