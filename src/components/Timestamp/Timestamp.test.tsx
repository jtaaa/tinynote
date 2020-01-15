import React from 'react';
import { render } from 'utils/test';
import { LastModified, BASE_TIMESTAMP } from './Timestamp.stories';
import { fancyTimestampToCopy } from './FancyTimestamp';

describe('<Timestamp />', () => {
  it('should do that', () => {
    const { getByText } = render(<LastModified />);

    expect(getByText('Last modified')).toBeInTheDocument();
    expect(getByText(fancyTimestampToCopy(BASE_TIMESTAMP))).toBeInTheDocument();
  });
});
