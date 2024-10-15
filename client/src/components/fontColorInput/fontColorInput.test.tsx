import { fireEvent, render, screen } from '@testing-library/react';
import FontColorInput from './fontColorInput';

const setFontColorMock = jest.fn();

describe('<FontColorInput />', () => {
  const fontColor = '#000000';
  const textValue = 'title';

  afterEach(() => {
    setFontColorMock.mockClear();
  });

  test('renders FontColorInput', () => {
    render(
      <FontColorInput
        textValue={textValue}
        fontColor={fontColor}
        setFontColor={setFontColorMock}
      />
    );
    expect(screen.queryByTestId('font-color-input')).toBeTruthy();
  });

  test('calls setFontColor function when clicked', async () => {
    render(
      <FontColorInput
        textValue={textValue}
        fontColor={fontColor}
        setFontColor={setFontColorMock}
      />
    );

    expect(screen.queryByTestId('font-color-input')).toBeTruthy();
    fireEvent.input(screen.getByTestId('font-color-input'), {
      target: { value: '#333333' },
    });
    expect(setFontColorMock).toHaveBeenCalled();
  });
});
