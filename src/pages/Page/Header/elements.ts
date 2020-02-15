import styled from 'styled-components/macro';
import Box from 'components/Box';
import { variant } from 'styled-system';
import css from '@styled-system/css';

type HeaderContainerProps = {
  variant: 'lifted' | undefined;
};
export const HeaderContainer = styled(Box)<HeaderContainerProps>(
  css({
    transition: 'box-shadow ease-in 100ms',
  }),
  variant({
    variants: {
      lifted: css({
        boxShadow: 'medium',
      }),
    },
  }),
);
