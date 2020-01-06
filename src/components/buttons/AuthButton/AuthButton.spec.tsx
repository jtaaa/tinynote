import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Base } from './AuthButton.stories';
import { KEYS } from 'utils/keys';
jest.mock('react-firebaseui/StyledFirebaseAuth');

describe('<AuthButton />', () => {
  it('should do that', async () => {
    const { queryByText, getByText } = render(<Base />);

    const button = getByText('Sign in');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText('Sign in or create an account')).toBeInTheDocument();
    expect(queryByText('Or continue without signing in')).toBeInTheDocument();

    fireEvent.click(getByText('Or continue without signing in'));
    expect(queryByText('Sign in or create an account')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText('Sign in or create an account')).toBeInTheDocument();

    fireEvent.keyDown(document, { keyCode: KEYS.ESCAPE_KEY });
    expect(queryByText('Sign in or create an account')).not.toBeInTheDocument();

    /**
     *   I think StyledFirebaseAuth still makes some async calls even tho I mocked
     * it. Waiting here to avoid the act(() => {}) error message.
     */
    await wait();
  });
});
