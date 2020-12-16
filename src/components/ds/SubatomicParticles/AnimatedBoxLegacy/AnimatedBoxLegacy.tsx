
import styled from 'styled-components';
import { animated as animatedLegacy } from 'react-spring/renderprops.cjs';
import { defaults, viewType } from '../SubatomicParticles';
import { AnimatedBoxLegacyStyledProps } from './index';

export const AnimatedBoxLegacy: React.FC<AnimatedBoxLegacyStyledProps> = styled(
    animatedLegacy.div,
)`
    ${viewType}
    ${defaults}
`;

export default AnimatedBoxLegacy;
