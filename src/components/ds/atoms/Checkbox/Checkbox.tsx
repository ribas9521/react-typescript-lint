import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { CheckboxProps, CheckboxStyledProps } from './index';
import { defaults } from '../../SubatomicParticles';
import { P } from '../../theme/typography';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            position: 'relative',
            color: 'secondary.default',
            padding: '12px',
            '&:focus': {
                outline: 'none',
                label: {
                    '& > span': {
                        backgroundColor: (props: any) => `${props.colors.contrast}10`
                    }
                }
            },
            label: {
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                marginLeft: '-11px',
                verticalAlign: 'middle',
                '& > span': {
                    flex: '0 0 auto',
                    color: 'currentColor',
                    overflow: 'visible',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    transition:
                        'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: (props: any) => `${props.colors.contrast}10`
                    },
                    '& > span': {
                        width: '100%',
                        display: 'flex',
                        alignItems: 'inherit',
                        justifyContent: 'inherit',
                    },
                },
            },
            input: {
                top: '0',
                left: '0',
                width: '100%',
                cursor: 'inherit',
                height: '100%',
                margin: '0',
                opacity: '0',
                padding: '0',
                zIndex: '1',
                position: 'absolute',
            },
            svg: {
                fill: 'currentColor',
                width: '1em',
                height: '1em',
                display: 'inline-block',
                fontSize: '1.5rem',
                transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                flexShrink: '0',
                userSelect: 'none',
            },
            p: {
                color: 'contrast',
                fontSize: 1,
            },
        },
        get disabled() {
            return {
                ...this.base,
                color: (props: any) => `${props.colors.contrast}40`,
                opacity: 0.5
            };
        },
    },
} as VariantArgs);

const Style: React.FC<CheckboxStyledProps> = styled.div`
    ${variants}
    ${defaults}
`;

const Checkbox: React.FC<CheckboxProps> = props => {

    const path = useMemo(
        () =>
            props.checked
                ? 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
                : 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
        [props.checked],
    ) as string;

    return (
        <Style
            styling={props.styling ?? 'base'}
            style={{ ...props.style, color: props?.color }}
        >
            <label className={props.checked ? 'checked' : ''} htmlFor={props.id}>
                <span>
                    <span>
                        <input
                            type="checkbox"
                            data-testid={props?.dataTestId}
                            disabled={props?.disabled}
                            {...props}
                        />
                        <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="presentation"
                        >
                            <path d={path} />
                        </svg>
                    </span>
                </span>
                {props?.label && <P styling="base">{props.label}</P>}
            </label>
        </Style>
    );
};

export default memo(Checkbox);
