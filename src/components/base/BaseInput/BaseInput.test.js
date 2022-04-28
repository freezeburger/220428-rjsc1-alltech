import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseInput from './BaseInput';

describe('<BaseInput />', () => {
  test('it should mount', () => {
    render(<BaseInput />);
    
    const baseInput = screen.getByTestId('BaseInput');

    expect(baseInput).toBeInTheDocument();
  });
});