import { screen, render } from '@testing-library/react';
import About from '../pages/About';
import '@testing-library/jest-dom';

describe('should render the following html elements', () => {
  test('should render all headings', () => {
    render(<About />);

    //# querying 👇
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
});

describe('should contain these text', () => {
  it('should render contact@bite-dash.com', () => {
    render(<About />);

    const text = screen.getByText('contact@bite-dash.com');

    expect(text).toBeInTheDocument();
  });
  it('should render About-us', () => {
    render(<About />);

    const text = screen.getByText('About Us');

    expect(text).toBeInTheDocument();
  });
});

//! watched till 1.38 min

//* group text by 'decribe' it and test are same
