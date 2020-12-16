import React from 'react';
import { Button, Box, Image } from '../../SubatomicParticles';
import styled from 'styled-components';
import { VariantArgs, variant } from 'styled-system';
import { AvatarProps, AvatarStyledProps } from './index'

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            backgroundColor: 'transparent',
            border: 'none',
            p: '0px',
            div: {
                width: 'inherit',
                height: 'inherit',
                transition: 'all 0.2s ease-in-out 0s',
                animationFillMode: 'both',
                overflow: 'hidden',
                borderRadius: '50rem',
                border: '2px solid rgba(75, 75, 75, 0.06)',
                img: {
                    filter: 'opacity(0.75)',
                    width: '102%',
                    height: 'auto',
                    objectFit: 'contain',
                    backgroundColor: 'primaries.0',
                },
            },
        },
        get sm() {
            return {
                ...this.base,
                width: '40px',
                height: '40px',
            };
        },
        get md() {
            return {
                ...this.base,
                width: '60px',
                height: '60px',
            };
        },
        get lg() {
            return {
                ...this.base,
                width: '150px',
                height: '150px',
            };
        },
    },
} as VariantArgs);

const Avatar: React.FC<AvatarProps> = ({ src, ...props }) => (
    <Button  {...props} styling="base" type="button">
        <Box styling="base">
            <Image src={src} alt="" />
        </Box>
    </Button>
);

export default styled(Avatar) <AvatarStyledProps>`
    ${variants}
`;
