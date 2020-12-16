import { StyledViewProps } from '../../SubatomicParticles';

export type AvatarStyledProps = StyledViewProps & {
    styling: 'sm' | 'md' | 'lg';
};

export interface AvatarProps {
    src: string;
}
