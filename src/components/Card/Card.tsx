import styled from 'styled-components/macro';
import Box from 'components/Box';
import { theme } from 'utils/theme';

const Card = styled(Box)`
  transition: background-color ease-in 100ms;

  &:hover {
    background-color: ${theme.colors.grey};
  }
`;

Card.defaultProps = {
  borderRadius: 2,
  boxShadow: 'light',
  border: `1px solid ${theme.colors.white}`,
  p: 3,
};

export default Card;
