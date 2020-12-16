
import styled from 'styled-components';
import { animated } from 'react-spring';
import { defaults, viewType } from '../SubatomicParticles';
import { AnimatedBoxStyledProps } from './index';

export const AnimatedBox: React.FC<AnimatedBoxStyledProps> = styled(animated.div)`
    ${viewType}
    ${defaults}
`;

export default AnimatedBox;
