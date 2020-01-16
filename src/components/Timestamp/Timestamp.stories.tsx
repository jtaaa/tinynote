import React from 'react';
import Timestamp from './Timestamp';
import { FancyTimestampTheme } from './FancyTimestamp';

export const BASE_TIMESTAMP = new Date();

export default { title: 'Utils|Timestamp', excludeStories: /BASE.*/ };

export const Base = () => {
  return <Timestamp timestamp={BASE_TIMESTAMP} />;
};

export const Fancy = () => {
  return <Timestamp theme={FancyTimestampTheme} timestamp={BASE_TIMESTAMP} />;
};

export const LastModified = () => {
  return (
    <Timestamp
      theme={FancyTimestampTheme}
      timestamp={BASE_TIMESTAMP}
      label="Last modified"
    />
  );
};
