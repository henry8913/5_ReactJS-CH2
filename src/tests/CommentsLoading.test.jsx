// Verifica che le recensioni vengano caricate correttamente al click su un libro.

import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CommentArea from '../components/CommentArea';
import { BrowserRouter } from 'react-router-dom';

describe('Comments Loading', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          { _id: '1', comment: 'Test comment', rate: 4 }
        ])
      })
    );
  });

  it('loads comments when providing a book id', async () => {
    const { container } = render(
      <BrowserRouter>
        <CommentArea bookId="1234" />
      </BrowserRouter>
    );

    await waitFor(() => {
      const listGroup = container.querySelector('.list-group');
      expect(listGroup).toBeTruthy();
    });
  });
});
