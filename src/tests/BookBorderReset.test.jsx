// Verifica che il bordo del primo libro torni normale quando si clicca su un secondo libro.

import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SingleBook from '../components/SingleBook';
import { BrowserRouter } from 'react-router-dom';

describe('Book Border Reset', () => {
  it('resets first book border when second book is clicked', () => {
    const books = [
      { title: 'Book 1', img: 'test1.jpg', asin: '1234' },
      { title: 'Book 2', img: 'test2.jpg', asin: '5678' }
    ];

    const { container } = render(
      <BrowserRouter>
        <div>
          <SingleBook 
            book={books[0]} 
            selected={true}
            onClick={() => {}}
          />
          <SingleBook 
            book={books[1]} 
            selected={false}
            onClick={() => {}}
          />
        </div>
      </BrowserRouter>
    );

    const bookElements = container.querySelectorAll('.book-card');

    expect(bookElements[0]).toHaveClass('border-danger');

    expect(bookElements[1]).not.toHaveClass('border-danger');
  });
});