import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './textInput';

const setTextContentMock = jest.fn();

describe('<TextInput />', () => {
  const textValue = 'title';
  const textContent = 'Welcome';
  const isRequired = true;

  afterEach(() => {
    setTextContentMock.mockClear();
  });
  test('renders TextInput', () => {
    render(
      <TextInput
        textValue={textValue}
        textContent={textContent}
        isRequired={isRequired}
        setTextContent={setTextContentMock}
      />
    );
    expect(screen.queryByTestId('test-input-' + textValue)).toBeTruthy();
  });

  test('calls setTextContent when input received', async () => {
    render(
      <TextInput
        textValue={textValue}
        textContent={textContent}
        isRequired={isRequired}
        setTextContent={setTextContentMock}
      />
    );
    expect(screen.queryByTestId('test-input-' + textValue)).toBeTruthy();
    await userEvent.type(
      screen.getByTestId('test-input-' + textValue),
      'some text'
    );
    expect(setTextContentMock).toHaveBeenCalled();
  });

  test('shows text content', () => {
    render(
      <TextInput
        textValue={textValue}
        textContent={textContent}
        isRequired={isRequired}
        setTextContent={setTextContentMock}
      />
    );
    expect(screen.queryByDisplayValue(textContent)).toBeTruthy();
  });
  test('shows symbol if required', () => {
    render(
      <TextInput
        textValue={textValue}
        textContent={''}
        isRequired={isRequired}
        setTextContent={setTextContentMock}
      />
    );
    expect(screen.queryByPlaceholderText(textValue + '*')).toBeTruthy();
  });

  test('does not shows symbol if not required', () => {
    render(
      <TextInput
        textValue={textValue}
        textContent={''}
        isRequired={false}
        setTextContent={setTextContentMock}
      />
    );
    expect(screen.queryByPlaceholderText(textValue + '*')).toBeFalsy();
    expect(screen.queryByPlaceholderText(textValue)).toBeTruthy();
  });
});
