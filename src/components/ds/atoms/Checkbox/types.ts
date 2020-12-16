export type CheckboxStyledProps =  {
    styling: 'base' | 'error' | 'disabled';
    style?: React.CSSProperties;
};

export interface CheckboxProps extends CheckboxStyledProps {
    name: string;
    id: string;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    dataTestId?: string;
    color?: string;
}

