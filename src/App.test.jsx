
// Test for verifying a truthy statement
import { describe, it, expect } from 'vitest';

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1 + 1).toEqual(2);
  });
});


// Test for rendering the App component
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
