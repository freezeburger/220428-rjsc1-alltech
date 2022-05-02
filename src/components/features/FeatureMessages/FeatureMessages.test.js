import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureMessages from './FeatureMessages';

jest.mock('../../../utils/use-local-storage.hook', () => ({
    __esModule: true,
    default: () => [ ['A','B'],()=> false]
  })
);

const appState = {
  messages:[{text:'Message Test'}]
}
const dispatch = () => false;
const types = {}

describe('<FeatureMessages />', () => {
  test('it should mount', () => {
    render(<FeatureMessages { ...{appState,dispatch,types}} />);

    expect(true).toBe(true);
  });
});