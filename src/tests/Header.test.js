import { render, screen , fireEvent} from '@testing-library/react';
import Header from '../Header';
import { DEFAULT_TITLE } from '../data/constants';

test('renders text', () => {
  render(<Header />);
  const titleElement = screen.getByTestId('title');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.innerHTML.trim()).toBe(DEFAULT_TITLE)
});

test('changes title', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('title').innerHTML.trim()).toBe(DEFAULT_TITLE)
  fireEvent.click(getByTestId('title-button'));
  expect(getByTestId('title').innerHTML.trim()).toBe('New Header')
});

test('changes title from input', () => {
  const { getByTestId } = render(<Header />);

  getByTestId('set-title').focus();
  fireEvent.change(getByTestId('set-title'), {target: { value: 'TEST'}});
  getByTestId('title-button').focus();
  
  expect(getByTestId('title').innerHTML.trim()).toBe('TEST')
})