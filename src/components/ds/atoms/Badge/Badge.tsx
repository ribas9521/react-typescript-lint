import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { defaults } from '../../SubatomicParticles';
import { BadgeStyledProps } from './index'

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            width: '1.14rem',
            height: '1.14rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            backgroundColor: 'grays.default',
            color: '#fff',
            borderRadius: '5rem',
            fontFamily: 'OpenSans Semibold',
            top: '-7px',
            right: '-7px',
            position: 'absolute',
        },
        get secondary() {
            return {
                ...this.base,
                backgroundColor: 'secondary.default',
            };
        },
        get primary() {
            return {
                ...this.base,
                backgroundColor: 'primary.default',
            };
        },
    },
} as VariantArgs);

const Badge: React.FC<BadgeStyledProps> = styled.span`
    ${variants}
    ${defaults}
`;

export default Badge;
