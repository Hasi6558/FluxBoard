import React from 'react';
import { render, screen } from '@testing-library/react';

describe('smoke', () => {
  it('renders text content', () => {
    render(<div>Hello Vitest</div>);
    expect(screen.getByText('Hello Vitest')).toBeInTheDocument();
  });
});
