import { fireEvent, render, screen } from '@testing-library/react';
import Names from '../Names';
import { NamesContext } from '../App';
import { NAMES } from '../data/constants';

test('renders text', () => {
  const { getByTestId } = render(<Names />)
  expect(getByTestId('names-list')).toBeInTheDocument();
});

test('displays names in constants list', () => {
  const { getByTestId } = render(
    <NamesContext.Provider value={ NAMES }>
      <Names />
    </NamesContext.Provider>
    )
  expect(NAMES.length).toBe(3)
  NAMES.forEach(n => {
    expect(getByTestId(`name-${n.id}`).innerHTML).toBe(n.name);
  });
})

test('add a new name to the list of names', () => {
  const { getByTestId } = render(
    <NamesContext.Provider value={ NAMES }>
      <Names />
    </NamesContext.Provider>
    )
    fireEvent.change(getByTestId('name-input'), { target: {value : 'tom' }});
    fireEvent.change(getByTestId('age-input'), { target: {value : '25' }});
    fireEvent.click(getByTestId('add-person'));

    expect(getByTestId(`name-4`)).toBeInTheDocument()
    expect(getByTestId(`name-4`).innerHTML).toBe('tom');


});

test('increment user age', () => {
  const { getByTestId } = render(
    <NamesContext.Provider value={ NAMES }>
      <Names />
    </NamesContext.Provider>
    )
    const age = getByTestId(`age-2`).innerHTML;
  fireEvent.click(getByTestId('increment-2'));
  expect(getByTestId(`age-2`).innerHTML).toBe((parseInt(age) + 1).toString());
});

test('sets hover state names', () => {
  const { getByTestId } = render(
    <NamesContext.Provider value={ NAMES }>
      <Names />
    </NamesContext.Provider>
    );
    expect(getByTestId('person').innerHTML).toBe('');
    fireEvent.mouseOver(getByTestId('item-2'));
    expect(getByTestId('person').innerHTML).toBe('---');

})

test('sets name selected', () => {
  const { getByTestId } = render(
    <NamesContext.Provider value={ NAMES }>
      <Names />
    </NamesContext.Provider>
    );
    expect(getByTestId('person').innerHTML).toBe('');
    fireEvent.click(getByTestId('item-2'));
    expect(getByTestId('person').innerHTML).toBe(NAMES[1].name);

})