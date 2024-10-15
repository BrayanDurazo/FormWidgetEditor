import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailInput from './emailInput';

const setEmailMock = jest.fn();

describe('<EmailInput />', () => {
  const email = 'example@example.com';

  afterEach(() => {
    setEmailMock.mockClear();
  });
  test('renders EmailInput', () => {
    render(<EmailInput email={email} setEmail={setEmailMock} />);
    expect(screen.queryByTestId('email-input')).toBeTruthy();
  });

  test('calls setEmail when input received', async () => {
    render(<EmailInput email={email} setEmail={setEmailMock} />);

    expect(screen.queryByTestId('email-input')).toBeTruthy();
    await userEvent.type(
      screen.getByTestId('email-input'),
      'newemail@update.com'
    );
    expect(setEmailMock).toHaveBeenCalled();
  });

  test('shows email', () => {
    render(<EmailInput email={email} setEmail={setEmailMock} />);

    expect(screen.queryByDisplayValue(email)).toBeTruthy();
  });

  test('shows required symbol in placeholder', () => {
    render(<EmailInput email={''} setEmail={setEmailMock} />);

    expect(screen.queryByPlaceholderText('Email*')).toBeTruthy();
  });
});
