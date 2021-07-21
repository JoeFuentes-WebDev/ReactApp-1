import { render, screen } from '@testing-library/react';
import Users from '../Users';

test('renders text', () => {
  render(<Users />);
  const namesElement = screen.getByTestId('users');
  expect(namesElement).toBeInTheDocument();
});
