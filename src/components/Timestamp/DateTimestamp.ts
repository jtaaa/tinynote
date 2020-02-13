import styled from 'styled-components/macro';
import moment from 'moment';
import { TimestampContainer } from './elements';

export const DateTimestampContainer = styled(TimestampContainer)``;
DateTimestampContainer.defaultProps = {
  display: 'flex',
  justifyContent: 'center',
  p: 4,
};

export const dateTimestampToCopy = (timestamp: Date) => {
  return moment(timestamp).format('MMM Do YYYY');
};

export const DateTimestampTheme = 'DateTimestampTheme' as const;
