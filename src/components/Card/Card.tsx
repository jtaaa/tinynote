import styled from 'styled-components/macro';
import Box from 'components/Box';

const Card = styled(Box)``;

Card.defaultProps = {
  borderRadius: 2,
  boxShadow: 'light',
  border: `1px solid`,
  borderColor: 'font',
  p: 3,
};

export default Card;
