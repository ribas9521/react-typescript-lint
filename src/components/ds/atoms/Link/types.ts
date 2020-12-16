import { LinkProps as LinkRouterProps } from 'react-router-dom';
import { TypographyProps } from 'styled-system';
import { DefaultStyleProps } from '../../SubatomicParticles';

export type LinkStyledProps = DefaultStyleProps & LinkRouterProps & TypographyProps & {
    styling: 'base' | 'baseBold' | 'primary' | 'secondary' | 'button' | 'admin';
};

export interface LinkProps extends LinkStyledProps {
    css?: any
}
