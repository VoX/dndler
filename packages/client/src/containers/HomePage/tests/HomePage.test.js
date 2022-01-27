import { render, screen } from '@testing-library/react';
import HomePage from '../index'

test('renders HomePage', () => {
  render(<HomePage />);
  // Checks if a button element is present
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
