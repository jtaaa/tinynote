import React from 'react';
import {
  TimestampContainer,
  LabelContainer,
  TimestampCopyContainer,
} from './elements';
import { Theme } from './types';
import { DEFAULT_STYLES } from './utils';

import {
  FancyTimestampContainer,
  fancyTimestampToCopy,
} from './FancyTimestamp';

type TimestampProps = {
  timestamp: Date;
  label?: string;
  theme?: Theme;
};
const Timestamp = ({
  timestamp,
  label = '',
  theme = DEFAULT_STYLES,
}: TimestampProps) => {
  let Container = null;
  let timestampCopy = timestamp.toTimeString();
  switch (theme) {
    case 'FANCY':
      Container = FancyTimestampContainer;
      timestampCopy = fancyTimestampToCopy(timestamp);
      break;
    default:
      Container = TimestampContainer;
      break;
  }
  return (
    <Container>
      <LabelContainer>{label}</LabelContainer>
      <TimestampCopyContainer>{timestampCopy}</TimestampCopyContainer>
    </Container>
  );
};

export default Timestamp;
