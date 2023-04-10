import { FilterCheckbox } from '@/components/SearchPage/FilterCheckbox';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('FilterCheckbox', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const onChange = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the list of items', () => {
    const { getByTestId } = render(
      <FilterCheckbox items={items} loading={false} onChange={onChange} />
    );
    const filterCheckbox = getByTestId('filter-checkbox');
    expect(filterCheckbox.children.length).toBe(items.length);
  });

  it('calls onChange when an item is checked', () => {
    const { getByLabelText } = render(
      <FilterCheckbox items={items} loading={false} onChange={onChange} />
    );
    const itemCheckbox = getByLabelText(items[1]) as HTMLInputElement;
    fireEvent.click(itemCheckbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(items[1]);
  });

  it('displays loading spinner when loading prop is true', () => {
    const { getByTestId } = render(
      <FilterCheckbox items={items} loading={true} onChange={onChange} />
    );
    const filterCheckbox = getByTestId('filter-checkbox');
    expect(filterCheckbox).toContainElement(
      document.querySelector('.spinner-border')
    );
  });
});
