import { ColorProps, FlexboxProps, LayoutProps, SpaceProps, PositionProps, BorderProps, GridProps } from "styled-system";

export type CssProperties = {
    transition?: string;
    filter?: string;
    textTransform?:
    'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
    animationFillMode?:
    'none'
    | 'forwards'
    | 'backwards'
    | 'both'
    | 'initial'
    | 'inherit';
    objectFit?:
    'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    whiteSpace?:
    'none'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
    | 'initial'
    | 'inherit';
    '-webkit-box-shadow'?: string;
};

export type DefaultStyleProps = BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    PositionProps &
    SpaceProps &
    GridProps& {
        // for some reason this isn't included; this is for replacing the 'base' component
        as?: React.ComponentType;
    };


export type StyledViewProps = DefaultStyleProps & {
    styling?: string;
    ref?: React.Ref<HTMLDivElement>;
};

export type ViewProps = DefaultStyleProps & {
    styling?:
    | 'base'
    | 'background'
    | 'overlay'
    | 'baloonRight'
    | 'baloonLeft'
    | 'row'
    | 'column'
    | 'grid';
};
