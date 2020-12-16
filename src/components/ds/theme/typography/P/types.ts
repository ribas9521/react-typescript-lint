import { DefaultStyleProps } from "../../../SubatomicParticles";
import { TypographyProps } from "styled-system";


export type PStyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'baseEllipsis' | 'baseBold' | 'info' | 'error' | 'bold';
    title?: any;
};

export interface H1Props { }
