import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   screen.debug();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('will have all expected fields', () => {
    render(<App />);

    var labels = screen.getAllByText(/name/)
    expect(labels.length).toEqual(2);

    var firstNameInput = screen.getByTestId('first-name-input')
    var lastNameInput = screen.getByTestId('last-name-input')
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    var submitButton = screen.getByText('Submit')
    expect(submitButton).toBeInTheDocument();
  });
})
