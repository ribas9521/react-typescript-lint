import React, { useState, useCallback, memo } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { variant, VariantArgs } from 'styled-system';
import { ModalStyledProps, ModalProps } from './index'
import { ReactComponent as IconClose } from './assets/close.svg';
import { defaults, Box, Button } from '../../SubatomicParticles';
import { H1 } from '../../theme/typography';
import Icon from '../Icon';
const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      bg: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      zIndex: 999991,
      '& >:first-child': {
        width: '50%',
        maxHeight: '60%',
        filter:
          'drop-shadow(0.071rem 0.071rem 0.428rem rgba(0, 0, 0, 0.2))',
        borderRadius: 'sm',
      },
    },
    get medium() {
      return {
        ...this.base,
        '& >:first-child': {
          width: '450px',
          minHeight: '210px',
          maxHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    },
    get extraLarge() {
      return {
        ...this.base,
        '& >:first-child': {
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
    },
    get small() {
      return {
        ...this.base,
        '& >:first-child': {
          width: '30%',
          maxHeight: '40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter:
            'drop-shadow(0.071rem 0.071rem 0.428rem rgba(0, 0, 0, 0.2))',
          borderRadius: 'sm',
        },
      };
    },
  },
} as VariantArgs);

const Style: React.FC<ModalStyledProps> = styled(animated.div)`
    ${variants}
    ${defaults}
`;


const Modal: React.FC<ModalProps> = props => {
  const [show, toggleShow] = useState<boolean>(true);
  const handleShow = () => toggleShow(prevState => !prevState);

  const style = useSpring(
    show
      ? {
        to: async (next: (style: any) => Promise<any>) => {
          await next({ display: 'flex' });
          await next({
            opacity: 1,
            transform: 'scale(1)',
          });
        },
        from: {
          display: 'none',
          opacity: 0,
          transform: 'scale(0)',
        },
        config: { tension: 90, mass: 1, friction: 12 },
      }
      : {
        to: async (next: (style: any) => Promise<any>) => {
          await next({
            opacity: 0,
            transform: 'scale(0)',
          });
          await next({ display: 'none' });
        },
        from: {
          display: 'flex',
          opacity: 1,
          transform: 'scale(1)',
        },
        config: { tension: 90, mass: 1, friction: 12 },
      },
  );

  const handleClose = useCallback(async () => {
    handleShow();
    setTimeout(() => {
      props.onClose && props.onClose();
    }, 1000);
  }, [props]);

  return (
    <Style styling={props.styling || 'base'}>
      <Box
        styling="column"
        justifyContent="space-between"
        bg="primary.default"
        p="md"
      >
        {!!props.onClose && (
          <Box styling="row" width="100%" height="15px" justifyContent="flex-end">
            <Button
              styling="underlined"
              type="button"
              m="none"
              onClick={handleClose}
              data-testid="button-close"
            >
              <Icon styling="base" title="Fechar">
                <IconClose height={20} width={20} />
              </Icon>
            </Button>
          </Box>
        )}

        {props.headerText && (
          <Box styling="row" width="100%">
            <H1 styling="base" mb="xs">
              {props.headerText}
            </H1>
          </Box>
        )}
        <Box
          data-testid="modal-body"
          styling="column"
          overflow="auto"
          width="100%"
        >
          {props.children}
        </Box>
        {!!props.footer && <Box mt="xs">{props.footer}</Box>}
      </Box>
    </Style>
  );
};

export default memo(Modal);
