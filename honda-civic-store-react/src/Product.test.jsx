import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product';
//import { BrowserRouter } from 'react-router-dom';

describe('Product Component', () => {
  it('Renders', () => {
    render(<Product />);
    let element = screen.getByText(/Civic/i);
    expect(element).toBeInTheDocument();
  });
});
