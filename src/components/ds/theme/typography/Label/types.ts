import { DefaultStyleProps } from "../../../SubatomicParticles";
import { TypographyProps } from "styled-system";


export type LabelStyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'error' | 'baseLight';
    id?: string;
    css?: any;
    htmlFor?: string;
    title?: string;
    whiteSpace?: string; 
};

export interface H1Props { }
