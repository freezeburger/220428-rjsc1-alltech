import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseHeader from './BaseHeader';

describe('<BaseHeader />', () => {
  test('it should mount', () => {
    render(<BaseHeader />);
    
    const baseHeader = screen.getByTestId('BaseHeader');

    expect(baseHeader).toBeInTheDocument();
  });
});