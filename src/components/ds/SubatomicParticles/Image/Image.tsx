import React, { memo } from 'react';
import styled from 'styled-components';
import { system } from 'styled-system';
import { ImageStyledProps } from './index';
import { defaults } from '../SubatomicParticles';

export const Image: React.FC<ImageStyledProps> = styled.img<ImageStyledProps>`
    ${defaults}
    ${system({
        filter: true,
        objectFit: true,
    })}
`;

export default memo(Image);
