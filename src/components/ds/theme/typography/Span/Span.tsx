import React, { memo } from 'react';
import styled from 'styled-components';
import { defaults } from '../../../SubatomicParticles';
import { SpanStyledProps } from './types';

export const Span: React.FC<SpanStyledProps> = styled.span<SpanStyledProps>`
    ${defaults}
    ${props => props.css ?? ''}
`;

export default memo(Span);
