import { FancyTimestampTheme } from './FancyTimestamp';
import { TimeTimestampTheme } from './TimeTimestamp';

export type Theme =
  | 'BASE'
  | typeof FancyTimestampTheme
  | typeof TimeTimestampTheme;
