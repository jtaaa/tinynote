import styled from 'styled-components/macro';
import UnstyledButton from '../UnstyledButton';
import css from '@styled-system/css';

export const Button = styled(UnstyledButton)(
  css({
    color: 'primary',
    borderRadius: 4,
    border: '1px solid',
    '&:hover': {
      bg: 'primary/light',
    },
  }),
);

export default Button;
