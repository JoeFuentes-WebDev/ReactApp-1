import { INIT_COUNT as zero } from '../data/constants'
import { render, fireEvent } from '@testing-library/react';
import BetterCount from '../BetterCount';

describe('clicking', () => {
  it('"add" button adds 1', () => {
    const { getByTestId } = render(<BetterCount />);
    let counter = zero;
    expect(getByTestId('count').innerHTML).toBe(`[: ${counter} :]`);
    fireEvent.click(getByTestId('plus'));
    expect(getByTestId('count').innerHTML).toBe(`[: ${counter + 1} :]`);
  });

  it('"sub" button subtracts 1', () => {
    const { getByTestId } = render(<BetterCount />);
    let counter = zero;
    expect(getByTestId('count').innerHTML).toBe(`[: ${counter} :]`);
    fireEvent.click(getByTestId('minus'));
    expect(getByTestId('count').innerHTML).toBe(`[: ${counter - 1} :]`);
  });

  it('"count" span resets to zero', () => {
    const { getByTestId } = render(<BetterCount />);
    const max = 5
    for (let i=0; i<max; i++) {
      fireEvent.click(getByTestId('plus'));
    }

    expect(getByTestId('count').innerHTML).toBe(`[: ${max} :]`);

    fireEvent.click(getByTestId('count'));
    expect(getByTestId('count').innerHTML).toBe(`[: ${zero} :]`);

  });
});

describe('form', () => {
  it('should add a color to the list', () => {
    const { getByTestId } = render(<BetterCount />);
    
    fireEvent.change(getByTestId('input'), {target: {value :'red'}});
    fireEvent.submit(getByTestId('form'));
    expect(getByTestId('color-0').innerHTML).toBe('red');
    fireEvent.change(getByTestId('input'), {target: {value :'green'}});
    fireEvent.submit(getByTestId('form'));
    expect(getByTestId('color-1').innerHTML).toBe('green');
  }); 

  it('reset should clear color and call default reducer', () => {
    const { getByTestId } = render(<BetterCount />);
    fireEvent.change(getByTestId('input'), {target: {value :'red'}});
    expect(getByTestId('reset').innerHTML).toBe(' red ');
    fireEvent.click(getByTestId('reset'));
    expect(getByTestId('input').value).toBe('')


  })
})
