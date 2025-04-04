// Verifica che vengano renderizzate le bootstrap cards dei libri.

import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TheAllBooks from '../components/TheAllBooks';
import { BrowserRouter } from 'react-router-dom';

describe('Book Cards', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          { asin: '1', title: 'Book 1', img: 'test1.jpg' },
          { asin: '2', title: 'Book 2', img: 'test2.jpg' }
        ])
      })
    );
  });

  it('renders books cards correctly', async () => {
    const { container } = render(
      <BrowserRouter>
        <TheAllBooks selectedCategory="history" searchQuery="" />
      </BrowserRouter>
    );
    
    await new Promise(resolve => setTimeout(resolve, 0));
    
    const bookCards = container.getElementsByClassName('book-card');
    expect(bookCards.length).toBeGreaterThan(0);
  });
});
