import { render, screen } from '@testing-library/react';
import SidebarSettings from './sidebarSettings';
import { FormWidget } from '../formEditor/formEditor';

const updateFormWidgetMock = jest.fn();

const defaultFormWidget: FormWidget = {
  id: 0,
  title: {
    textContent: 'Some title',
    fontSize: 24,
    fontColor: '#000000',
    alignment: 'center',
  },
  subTitle: {
    textContent: 'Some subtitle',
    fontSize: 16,
    fontColor: '#000000',
    alignment: 'center',
  },
  submitButton: {
    textContent: 'Submit',
    backgroundColor: '#000000',
  },
  requiredFirstName: true,
  requiredLastName: false,
};

describe('<FormPreview />', () => {
  afterEach(() => {
    updateFormWidgetMock.mockClear();
  });

  test('renders all the elements of the sidebar', () => {
    render(
      <SidebarSettings
        formWidget={defaultFormWidget}
        updateFormWidget={updateFormWidgetMock}
      />
    );
    screen.debug();

    expect(screen.queryByTestId('test-input-Title')).toBeTruthy();
    expect(screen.queryByTestId('left-alignment-button-title')).toBeTruthy();
    expect(screen.queryByTestId('center-alignment-button-title')).toBeTruthy();
    expect(screen.queryByTestId('right-alignment-button-title')).toBeTruthy();

    expect(screen.queryByTestId('test-input-Subtitle')).toBeTruthy();
    expect(screen.queryByTestId('left-alignment-button-subtitle')).toBeTruthy();
    expect(
      screen.queryByTestId('center-alignment-button-subtitle')
    ).toBeTruthy();
    expect(
      screen.queryByTestId('right-alignment-button-subtitle')
    ).toBeTruthy();

    expect(screen.queryAllByTestId('font-color-input')).toHaveLength(2);
    expect(screen.queryAllByTestId('font-size-input')).toHaveLength(2);

    expect(screen.queryByTestId('submit-button-color-input')).toBeTruthy();
    expect(screen.queryByTestId('submit-button-text-input')).toBeTruthy();
    expect(screen.queryByTestId('toggle-button-true')).toBeTruthy();
    expect(screen.queryByTestId('toggle-button-false')).toBeTruthy();
  });
});
