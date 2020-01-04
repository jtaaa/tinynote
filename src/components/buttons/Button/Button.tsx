import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import css from '@styled-system/css';
import { variant } from 'styled-system';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};
export const Button = styled(UnstyledButton)<ButtonProps>(
  css({
    borderRadius: 4,
    border: '1px solid',
    color: 'primary',
    '&:hover, &:focus': {
      backgroundColor: 'primary/light',
    },
  }),
  variant({
    variants: {
      primary: {
        color: 'primary',
        '&:hover, &:focus': {
          bg: 'primary/light',
        },
      },
      secondary: {
        color: 'secondary',
        '&:hover, &:focus': {
          bg: 'secondary/light',
        },
      },
    },
  }),
);

export default Button;
