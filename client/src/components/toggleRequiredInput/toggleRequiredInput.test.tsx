import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleButton from './toggleRequiredInput';

const mockSetRequired = jest.fn();

describe('<ToggleButton />', () => {
  const requiredValue = true;

  test('renders ToggleButton', () => {
    render(
      <ToggleButton required={requiredValue} setRequired={mockSetRequired} />
    );
    expect(screen.queryByTestId('toggle-button-' + requiredValue)).toBeTruthy();
  });

  test('calls setRequiredFunction when toggled', async () => {
    render(
      <ToggleButton required={requiredValue} setRequired={mockSetRequired} />
    );
    expect(screen.queryByTestId('toggle-button-' + requiredValue)).toBeTruthy();
    await userEvent.click(screen.getByTestId('toggle-button-' + requiredValue));
    expect(mockSetRequired).toHaveBeenCalled();
  });

  test('shows On state when required', async () => {
    render(
      <ToggleButton required={requiredValue} setRequired={mockSetRequired} />
    );
    expect(screen.queryByText('On')).toBeTruthy();
    expect(screen.queryByText('Off')).toBeFalsy();
  });

  test('shows Off state when not required', async () => {
    render(
      <ToggleButton required={!requiredValue} setRequired={mockSetRequired} />
    );
    expect(screen.queryByText('On')).toBeFalsy();
    expect(screen.queryByText('Off')).toBeTruthy();
  });
});
