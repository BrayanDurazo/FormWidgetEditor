import { fireEvent, render, screen } from '@testing-library/react';
import FontSizeInput from './fontSizeInput';

const setFontSizeMock = jest.fn();

describe('<FontSizeInput />', () => {
  const fontSize = 8;

  afterEach(() => {
    setFontSizeMock.mockClear();
  });

  test('renders FontSizeInput', () => {
    render(<FontSizeInput fontSize={fontSize} setFontSize={setFontSizeMock} />);
    expect(screen.queryByTestId('font-size-input')).toBeTruthy();
  });

  test('calls setFontSize when number input clicked', async () => {
    render(<FontSizeInput fontSize={fontSize} setFontSize={setFontSizeMock} />);

    expect(screen.queryByTestId('font-size-input')).toBeTruthy();

    fireEvent.change(screen.getByTestId('font-size-input'), {
      target: { value: '24' },
    });

    expect(setFontSizeMock).toHaveBeenCalled();
  });
});
