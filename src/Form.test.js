import { render, screen, fireEvent } from '@testing-library/react';
import { NameForm } from './Form';

describe('NameForm', () => {
  it('will display an error if the name is not provided.', () => {
    render(<NameForm />);

    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('error-header')).toBeInTheDocument();
    expect(screen.queryByTestId('success-header')).not.toBeInTheDocument();
  });

  it('will display a success message if the name is provided.', () => {
    render(<NameForm />);

    var input = screen.getByTestId('name-input');
    fireEvent.change(input, { target: { value: 'Mike' } });
    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('success-header')).toBeInTheDocument();
    expect(screen.queryByTestId('error-header')).not.toBeInTheDocument();
  });
});
