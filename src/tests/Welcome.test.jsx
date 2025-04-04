// Verifica che il componente Welcome venga montato correttamente.

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Welcome from '../components/Welcome';

describe('Welcome Component', () => {
  it('renders correctly', () => {
    render(<Welcome />);
    const welcomeElement = screen.getByRole('heading');
    expect(welcomeElement).toBeInTheDocument();
  });
});
