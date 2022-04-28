import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseButton from './BaseButton';

describe('<BaseButton />', () => {
  test('it should mount', () => {
    render(<BaseButton />);
    
    const baseButton = screen.getByTestId('BaseButton');

    expect(baseButton).toBeInTheDocument();
  });
});