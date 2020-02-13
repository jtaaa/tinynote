import { FancyTimestampTheme } from './FancyTimestamp';
import { TimeTimestampTheme } from './TimeTimestamp';
import { DateTimestampTheme } from './DateTimestamp';

export type Theme =
  | 'BASE'
  | typeof FancyTimestampTheme
  | typeof TimeTimestampTheme
  | typeof DateTimestampTheme;
