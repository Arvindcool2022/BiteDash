import { render, screen } from '@testing-library/react';
import CARD_DATA from '../mocks/cardData';
import Card from '../components/MainSection/Card';
import '@testing-library/jest-dom';

test('should render the restaurant Card with the props data', () => {
  render(<Card restaurantObject={CARD_DATA} />);

  const name = screen.getByText('Sangeetha Veg Restaurant');

  expect(name).toBeInTheDocument();
});
