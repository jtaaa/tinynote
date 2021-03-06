import styled from 'styled-components/macro';
import moment from 'moment';
import { TimestampContainer } from './elements';

export const FancyTimestampContainer = styled(TimestampContainer)``;
FancyTimestampContainer.defaultProps = {};

export const fancyTimestampToCopy = (timestamp: Date) => {
  return moment(timestamp).format('MMM Do 20, h:mm:ss a');
};

export const FancyTimestampTheme = 'FancyTimestampTheme' as const;
