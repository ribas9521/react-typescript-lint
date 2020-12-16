import { TypographyProps } from 'styled-system';
import { DefaultStyleProps } from '../../SubatomicParticles';

export type ModalStyledProps = DefaultStyleProps & TypographyProps & {
    styling: 'base' | 'medium' | 'extraLarge' | 'small';
    style?: React.CSSProperties;
};

export interface ModalProps extends ModalStyledProps {
    children: React.ReactNode;
    headerText?: string | React.ReactNode;
    footer?: any;
    onClose?: () => void;
    onScroll?: (value: boolean) => void;
    css?: any;
}
