import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureMessages from './FeatureMessages';

describe('<FeatureMessages />', () => {
  test('it should mount', () => {
    render(<FeatureMessages />);
    
    const featureMessages = screen.getByTestId('FeatureMessages');

    expect(featureMessages).toBeInTheDocument();
  });
});