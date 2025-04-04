// Verifica che il componente CommentArea venga renderizzato correttamente.

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CommentArea from '../components/CommentArea';

describe('CommentArea Component', () => {
  it('renders correctly', () => {
    const { container } = render(<CommentArea />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
