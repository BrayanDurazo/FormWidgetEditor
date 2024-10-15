import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubmitButtonSettingInput from './submitButtonSettingsInput';

const setButtonTexMock = jest.fn();
const setBackgroundColorMock = jest.fn();

describe('<SubmitButtonSettingInput />', () => {
  const buttonText = 'submit';
  const backgroundColor = '#000000';

  afterEach(() => {
    setButtonTexMock.mockClear();
    setBackgroundColorMock.mockClear();
  });

  test('renders SubmitButtonSettingInput', () => {
    render(
      <SubmitButtonSettingInput
        buttonText={buttonText}
        setButtonTex={setButtonTexMock}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColorMock}
      />
    );
    expect(screen.queryByTestId('submit-button-text-input')).toBeTruthy();
    expect(screen.queryByTestId('submit-button-color-input')).toBeTruthy();
  });

  test('calls setBackgroundColor color input clicked', async () => {
    render(
      <SubmitButtonSettingInput
        buttonText={buttonText}
        setButtonTex={setButtonTexMock}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColorMock}
      />
    );
    expect(screen.queryByTestId('submit-button-color-input')).toBeTruthy();
    fireEvent.input(screen.getByTestId('submit-button-color-input'), {
      target: { value: '#333333' },
    });
    expect(setButtonTexMock).toHaveBeenCalledTimes(0);
    expect(setBackgroundColorMock).toHaveBeenCalled();
  });

  test('calls setButtonTex when typed on text input', async () => {
    render(
      <SubmitButtonSettingInput
        buttonText={buttonText}
        setButtonTex={setButtonTexMock}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColorMock}
      />
    );

    expect(screen.queryByTestId('submit-button-text-input')).toBeTruthy();
    await userEvent.type(
      screen.getByTestId('submit-button-text-input'),
      'some text'
    );
    expect(setBackgroundColorMock).toHaveBeenCalledTimes(0);
    expect(setButtonTexMock).toHaveBeenCalled();
  });
});
