import React from 'react';
import { render } from 'utils/test';
import HomeView from './HomeView';

test('renders the name of the company', () => {
  const { getByText } = render(<HomeView />);
  const linkElement = getByText('tinynote');
  expect(linkElement).toBeInTheDocument();
});
