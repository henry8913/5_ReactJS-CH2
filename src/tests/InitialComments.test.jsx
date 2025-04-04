// Verifica che non ci siano SingleComment all'avvio.

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CommentArea from '../components/CommentArea';

describe('Initial Comments', () => {
  it('has no SingleComment components initially', () => {
    const { container } = render(<CommentArea />);
    const comments = container.getElementsByClassName('single-comment');
    expect(comments.length).toBe(0);
  });
});
