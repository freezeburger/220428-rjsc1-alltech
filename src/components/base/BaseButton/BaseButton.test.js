import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseButton from './BaseButton';

describe.only('<BaseButton />', () => {
  
  test('it reflects text content', () => {

    render(<BaseButton>TEST</BaseButton>);
    const baseButton = screen.getByText('TEST');

    expect(baseButton).toBeDefined();
  });

  test('it should pass onClick Event', () => {
    const callback = jest.fn()

    render(<BaseButton onClick={callback}>TEST</BaseButton>);
    fireEvent.click( screen.getByText('TEST'));
    fireEvent.click( screen.getByText('TEST'));

    expect(callback.mock.calls.length).toBe(2);
    
  });


});