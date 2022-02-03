import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DNDLER link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DNDLER/i);
  expect(linkElement).toBeInTheDocument();
});
