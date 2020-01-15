import React from 'react';
import Timestamp from './Timestamp';

export const BASE_TIMESTAMP = new Date();

export default { title: 'Utils|Timestamp', excludeStories: /BASE.*/ };

export const Base = () => {
  return <Timestamp timestamp={BASE_TIMESTAMP} />;
};

export const Fancy = () => {
  return <Timestamp theme="FANCY" timestamp={BASE_TIMESTAMP} />;
};

export const LastModified = () => {
  return (
    <Timestamp theme="FANCY" timestamp={BASE_TIMESTAMP} label="Last modified" />
  );
};
