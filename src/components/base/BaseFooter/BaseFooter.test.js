import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseFooter from './BaseFooter';

describe('<BaseFooter />', () => {
  test('it should mount', () => {
    render(<BaseFooter />);
    
    const baseFooter = screen.getByTestId('BaseFooter');

    expect(baseFooter).toBeInTheDocument();
  });
});