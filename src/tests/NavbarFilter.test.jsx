// Verifica il filtraggio dei libri tramite navbar.

import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MyNav from '../components/MyNav';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

describe('Navbar Filtering', () => {
  it('updates search query when typing', () => {
    const mockSetSearchQuery = vi.fn();
    const mockThemeContext = {
      theme: 'light',
      toggleTheme: vi.fn()
    };

    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <BrowserRouter>
          <MyNav searchQuery="" setSearchQuery={mockSetSearchQuery} />
        </BrowserRouter>
      </ThemeContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith('test');
  });
});
