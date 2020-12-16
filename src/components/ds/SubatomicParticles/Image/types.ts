import { HTMLProps } from 'react';
import { CssProperties, DefaultStyleProps } from "../index";


export type ImageStyledProps = CssProperties & DefaultStyleProps & HTMLProps<HTMLImageElement> & {
  src: string
};


