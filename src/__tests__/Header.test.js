import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import appStore from '../store/appStore';
import { LOCATIONS } from '../utils/constants';

test('should have a user button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header locationList={LOCATIONS} />
      </Provider>
    </BrowserRouter>
  );

  const userButton = screen.getByRole('button', { name: 'Guest User' });

  expect(userButton).toBeInTheDocument();
});
test('should have a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header locationList={LOCATIONS} />
      </Provider>
    </BrowserRouter>
  );

  const loginText = screen.getByRole('button', { name: /login/i });

  expect(loginText).toBeInTheDocument();
});

test('should have no items in cart', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header locationList={LOCATIONS} />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText('cart');

  expect(cartItems).toBeInTheDocument();
});
