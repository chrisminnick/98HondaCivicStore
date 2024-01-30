import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import NavigationItem from './NavigationItem';
import { BrowserRouter } from 'react-router-dom';

describe('NavigationItem Component', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <NavigationItem link="http://testlink.com" title="Test Item" />
      </BrowserRouter>
    );
    let element = screen.getByText(/Test Item/i);
    expect(element).toBeInTheDocument();
  });
});
