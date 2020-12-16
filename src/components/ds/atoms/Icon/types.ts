import { ReactNode } from 'react';
import { DefaultStyleProps } from '../../SubatomicParticles';

export type IconStyledProps = DefaultStyleProps & {
  styling?: 'base' | 'baseReverse' | 'baseNone' | 'pointer' | 'disabled' | 'active' | 'admin' | 'adminActive' | 'adminButton'
  css?: any;
  title?: string;
}

export interface IconProps extends IconStyledProps {
  children: ReactNode;
}
