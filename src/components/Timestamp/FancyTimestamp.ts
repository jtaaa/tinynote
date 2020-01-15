import styled from 'styled-components/macro';
import moment from 'moment';
import { TimestampContainer } from './elements';

export const FancyTimestampContainer = styled(TimestampContainer)``;
FancyTimestampContainer.defaultProps = {
  p: 2,
};

export const fancyTimestampToCopy = (timestamp: Date) => {
  return moment(timestamp).format('MMM Do 20, h:mm:ss a');
};
