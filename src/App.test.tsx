import React from 'react';
import { render } from 'utils/test';
import App from './App';

test('renders the name of the company', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('tinynote');
  expect(linkElement).toBeInTheDocument();
});
