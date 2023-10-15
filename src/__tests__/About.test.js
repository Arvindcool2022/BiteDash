import { screen, render } from '@testing-library/react';
import About from '../pages/About';
import '@testing-library/jest-dom';

test('should render all headings', () => {
  render(<About />);
  const headings = screen.getAllByRole('heading');

  // console.log(headings);

  //# assertion 👇
  headings.forEach(heading => {
    expect(heading).toBeInTheDocument();
  });
});

test('should render all list items', () => {
  render(<About />);
  const listItems = screen.getAllByRole('listitem');

  listItems.forEach(listItem => {
    expect(listItem).toBeInTheDocument();
  });
});

//! watched till 1.38 min
