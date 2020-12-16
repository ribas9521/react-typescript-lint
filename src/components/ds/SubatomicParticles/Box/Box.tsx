import React from 'react';
import styled from 'styled-components';
import { system, color } from 'styled-system';
import { BoxStyledProps } from './index'
import { defaults, viewType } from '../SubatomicParticles';

export const Box: React.FC<BoxStyledProps> = styled.div<BoxStyledProps>`
    ${viewType}
    ${defaults}
    ${color}
    ${system({
        transition: true,
        animationFillMode: true,
    })}
    ${props => props.css ?? ''}
`;

export default Box;
