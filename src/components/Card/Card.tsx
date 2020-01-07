import styled from 'styled-components/macro';
import Box from 'components/Box';

const Card = styled(Box)``;

Card.defaultProps = {
  bg: 'white',
  borderRadius: 2,
  boxShadow: 'light',
  p: 3,
};

export default Card;
