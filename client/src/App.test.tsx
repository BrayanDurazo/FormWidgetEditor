import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('it shows the list of fetched todo items', async () => {
    render(<App />);

    //     await waitFor(() => expect(screen.findByText()).toBeTruthy());

    //     expect(screen.getByTestId()).toBeTruthy();
  });
});
