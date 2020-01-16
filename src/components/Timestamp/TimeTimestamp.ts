import styled from 'styled-components/macro';
import moment from 'moment';
import { TimestampContainer } from './elements';

export const TimeTimestampContainer = styled(TimestampContainer)``;
TimeTimestampContainer.defaultProps = {};

export const timeTimestampToCopy = (timestamp: Date) => {
  return moment(timestamp).format('h:mm:ss a');
};

export const TimeTimestampTheme = 'TimeTimestampTheme' as const;
