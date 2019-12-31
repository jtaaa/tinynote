import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the name of the company', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Sell Your Stuff');
  expect(linkElement).toBeInTheDocument();
});
