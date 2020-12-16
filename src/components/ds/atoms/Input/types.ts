import { Props as InputMaskProps } from 'react-input-mask';
import { DefaultStyleProps } from "../../SubatomicParticles";

export type InputStyledProps = InputMaskProps & DefaultStyleProps & {
    styling: 'base' | 'error' | 'disabled';
};

export interface InputProps extends InputStyledProps {

}
