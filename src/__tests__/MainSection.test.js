import { fireEvent, render, screen } from '@testing-library/react';
import MainSection from '../pages/MainSection';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { RESTAURANT_DATA } from '../utils/constants';

// ! fetch fail
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.reject('failed');
//     }
//   });
// });

//# fetch resolve
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    }
  });
});

// !dont forget to comment out both Carousel before test

test('render search input and check if it works', async () => {
  console.log('dont forget to comment out both Carousel before test');

  await act(async () => {
    render(
      <BrowserRouter>
        <MainSection />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId('searchinput');
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: 'kfc' } });

  console.log(searchInput.value);

  const cards = screen.getAllByTestId('rescard');

  expect(cards.length).toBe(1);
});

test('render search input and check if it works again', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <MainSection />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId('searchinput');
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: 'pizza' } });

  console.log(searchInput.value);

  const cards = screen.getAllByTestId('rescard');

  expect(cards.length).toBe(3);
});
