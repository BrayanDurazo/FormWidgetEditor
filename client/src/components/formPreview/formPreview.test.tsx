import { render, screen } from '@testing-library/react';
import FormPreview from './formPreview';
import { TextElement } from '../formEditor/formEditor';

describe('<FormPreview />', () => {
  const title: TextElement = {
    textContent: 'Some title',
    fontSize: 24,
    fontColor: '#000000',
    alignment: 'left',
  };
  const subTitle: TextElement = {
    textContent: 'Some subtitle',
    fontSize: 18,
    fontColor: '#000000',
    alignment: 'left',
  };
  const firstNameRequired = true;
  const lastNameRequired = false;
  const submitButton = {
    textContent: 'Submit button',
    backgroundColor: '#000000',
  };

  test('renders form preview', () => {
    render(
      <FormPreview
        title={title}
        subTitle={subTitle}
        firstNameRequired={firstNameRequired}
        lastNameRequired={lastNameRequired}
        submitButton={submitButton}
      />
    );
    expect(screen.queryByText(title.textContent)).toBeTruthy();
    expect(screen.queryByText(subTitle.textContent)).toBeTruthy();
    expect(screen.queryByPlaceholderText('First Name*')).toBeTruthy();
    expect(screen.queryByPlaceholderText('Last Name')).toBeTruthy();
    expect(screen.queryByPlaceholderText('Email*')).toBeTruthy();
    expect(screen.queryByText(submitButton.textContent)).toBeTruthy();
  });
});
