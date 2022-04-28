import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseMain from './BaseMain';

describe('<BaseMain />', () => {
  test('it should mount', () => {
    render(<BaseMain />);
    
    const baseMain = screen.getByTestId('BaseMain');

    expect(baseMain).toBeInTheDocument();
  });
});