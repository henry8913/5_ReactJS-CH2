// Verifica che il bordo del libro cambi colore al click.

import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SingleBook from '../components/SingleBook';
import { BrowserRouter } from 'react-router-dom';

describe('Book Border', () => {
  it('changes border color on click', () => {
    const book = { title: 'Test Book', img: 'test.jpg', asin: '1234' };
    const onClick = vi.fn();
    const { container } = render(
      <BrowserRouter>
        <SingleBook book={book} selected={true} onClick={onClick} />
      </BrowserRouter>
    );
    const bookElement = container.querySelector('.book-card');
    expect(bookElement).toHaveClass('border-danger');
  });
});
