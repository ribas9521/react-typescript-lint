import { DefaultStyleProps } from '../../SubatomicParticles';

export type BadgeStyledProps = DefaultStyleProps & {
    styling: 'base' | 'primary' | 'secondary';
}

export interface BadgeProps extends BadgeStyledProps {
    label?: string;
}
