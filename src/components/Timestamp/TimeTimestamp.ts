import styled from 'styled-components/macro';
import moment from 'moment';
import { TimestampContainer } from './elements';

export const TimeTimestampContainer = styled(TimestampContainer)`
  font-family: 'Inconsolata', monospace;
`;
TimeTimestampContainer.defaultProps = {};

export const timeTimestampToCopy = (timestamp: Date) => {
  return moment(timestamp).format('HH:mm:ss');
};

export const TimeTimestampTheme = 'TimeTimestampTheme' as const;
