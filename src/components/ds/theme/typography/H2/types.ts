import { DefaultStyleProps } from "../../../SubatomicParticles";
import { TypographyProps } from "styled-system";


export type H2StyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'bold' | 'error' | 'light';
};

export interface H1Props { }
