import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContainerHeader from './ContainerHeader';

describe('<ContainerHeader />', () => {
  test('it should mount', () => {
    render(<ContainerHeader />);
    
    const containerHeader = screen.getByTestId('ContainerHeader');

    expect(containerHeader).toBeInTheDocument();
  });
});