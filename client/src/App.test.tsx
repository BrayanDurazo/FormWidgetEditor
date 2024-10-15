import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders the form editor', async () => {
    render(<App />);
    // screen.debug();
    // await waitFor(() => expect(screen.find()).toBeTruthy());
    // expect(screen.getByTestId()).toBeTruthy();
  });
});
