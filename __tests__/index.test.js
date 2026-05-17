import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

test('homepage renders welcome message', () => {
  render(<HomePage />);
  const headingElement = screen.getByRole('heading', { name: /welcome to cloudover company website/i });
  expect(headingElement).toBeInTheDocument();
});