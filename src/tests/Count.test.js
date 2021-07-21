import { INIT_COUNT as zero } from '../data/constants'
import { render, screen, fireEvent } from '@testing-library/react';
import Count from '../Count';

let count, plusButton, minusButton;

beforeEach(() => {
  render(<Count />);
  count = screen.getByTestId('result');
  plusButton = screen.getByTestId('plus');
  minusButton = screen.getByTestId('minus');
})

describe('clicked', () => {
  it('add button adds 1', () => {
    expect(count.innerHTML).toBe(zero.toString())
    fireEvent.click(plusButton);
    expect(count.innerHTML).toEqual((zero+1).toString())
  });

  it('subtract button subtracts 1 if value is grater than 0', () => {
    const max = 4
    for (let i=zero; i<max; i++) {
      fireEvent.click(plusButton);
    }
    expect(count.innerHTML).toEqual((max).toString());
    fireEvent.click(minusButton);
    expect(count.innerHTML).toEqual((max-1).toString())
  });

  it('does not subtract if value is already 0', () => {

    expect(count.innerHTML).toEqual((zero).toString());
    fireEvent.click(minusButton);
    expect(count.innerHTML).toEqual((zero).toString())

  })
})