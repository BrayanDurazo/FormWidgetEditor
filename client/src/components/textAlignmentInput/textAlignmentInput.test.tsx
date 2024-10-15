import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextAlignmentInput from './textAlignmentInput';

const setAlignmentInputMock = jest.fn();

describe('<TextAlignmentInput />', () => {
  const textValue = 'title';
  const alignment = 'left';
  test('renders TextAlignmentInput', () => {
    render(
      <TextAlignmentInput
        textValue={textValue}
        alignment={alignment}
        setAlignment={setAlignmentInputMock}
      />
    );
    expect(
      screen.queryByTestId('left-alignment-button-' + textValue)
    ).toBeTruthy();
    expect(
      screen.queryByTestId('center-alignment-button-' + textValue)
    ).toBeTruthy();
    expect(
      screen.queryByTestId('right-alignment-button-' + textValue)
    ).toBeTruthy();
  });

  test('calls the setAlignment every time one button is clicked', async () => {
    render(
      <TextAlignmentInput
        textValue={textValue}
        alignment={alignment}
        setAlignment={setAlignmentInputMock}
      />
    );
    expect(
      screen.queryByTestId('left-alignment-button-' + textValue)
    ).toBeTruthy();
    await userEvent.click(
      screen.getByTestId('left-alignment-button-' + textValue)
    );
    expect(setAlignmentInputMock).toHaveBeenCalledTimes(1);

    expect(
      screen.queryByTestId('center-alignment-button-' + textValue)
    ).toBeTruthy();
    await userEvent.click(
      screen.getByTestId('center-alignment-button-' + textValue)
    );
    expect(setAlignmentInputMock).toHaveBeenCalledTimes(2);

    expect(
      screen.queryByTestId('right-alignment-button-' + textValue)
    ).toBeTruthy();
    await userEvent.click(
      screen.getByTestId('right-alignment-button-' + textValue)
    );
    expect(setAlignmentInputMock).toHaveBeenCalledTimes(3);
  });
});
