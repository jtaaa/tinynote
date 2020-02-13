import React from 'react';
import { StyledComponentProps } from 'styled-components/macro';
import { BoxProps } from 'components/Box';
import { Theme } from './types';
import { DEFAULT_STYLES } from './utils';
import {
  TimestampContainer,
  LabelContainer,
  TimestampCopyContainer,
} from './elements';

import {
  FancyTimestampContainer,
  fancyTimestampToCopy,
  FancyTimestampTheme,
} from './FancyTimestamp';
import {
  TimeTimestampContainer,
  TimeTimestampTheme,
  timeTimestampToCopy,
} from './TimeTimestamp';
import {
  DateTimestampTheme,
  DateTimestampContainer,
  dateTimestampToCopy,
} from './DateTimestamp';

// That any is fine.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TimestampProps = StyledComponentProps<'div', any, BoxProps, never> & {
  timestamp: Date;
  label?: string;
  theme?: Theme;
};
const Timestamp = ({
  timestamp,
  label = '',
  theme = DEFAULT_STYLES,
  ...boxProps
}: TimestampProps) => {
  let Container = TimestampContainer;
  let timestampCopy = timestamp.toTimeString();
  switch (theme) {
    case FancyTimestampTheme:
      Container = FancyTimestampContainer;
      timestampCopy = fancyTimestampToCopy(timestamp);
      break;
    case TimeTimestampTheme:
      Container = TimeTimestampContainer;
      timestampCopy = timeTimestampToCopy(timestamp);
      break;
    case DateTimestampTheme:
      Container = DateTimestampContainer;
      timestampCopy = dateTimestampToCopy(timestamp);
      break;
    default:
      break;
  }
  return (
    <Container {...boxProps}>
      {label && <LabelContainer>{label}</LabelContainer>}
      <TimestampCopyContainer>{timestampCopy}</TimestampCopyContainer>
    </Container>
  );
};

export default Timestamp;
