import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    let element = screen.getByText(/1998/i);
    expect(element).toBeInTheDocument();
  });
});
