import { render, screen, fireEvent } from "@testing-library/react";
import { ContactUsForm } from "./ContactUs";

describe('ContactUsForm', () => {
  it('will display an error if no field is provided.', () => {
    render(<ContactUsForm />);

    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('error-header')).toBeInTheDocument();
    expect(screen.queryByTestId('success-header')).not.toBeInTheDocument();
  });

  it('will display an error if the email is not provided.', () => {
    render(<ContactUsForm />);

    var department = screen.getByTestId('department-select');
    fireEvent.change(department, { target: { value: 'Engineering' } });
    var question = screen.getByTestId('question-textarea');
    fireEvent.change(question, { target: { value: 'What is your name' } });
    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('error-header')).toBeInTheDocument();
    expect(screen.queryByTestId('success-header')).not.toBeInTheDocument();
  });

  it('will display an error if the department is not provided.', () => {
    render(<ContactUsForm />);

    var email = screen.getByTestId('email-input');
    fireEvent.change(email, { target: { value: 'mike@test.com' } });
    var question = screen.getByTestId('question-textarea');
    fireEvent.change(question, { target: { value: 'What is your name' } });
    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('error-header')).toBeInTheDocument();
    expect(screen.queryByTestId('success-header')).not.toBeInTheDocument();
  });

  it('will display an error if the question is not provided.', () => {
    render(<ContactUsForm />);

    var email = screen.getByTestId('email-input');
    fireEvent.change(email, { target: { value: 'mike@test.com' } });
    var department = screen.getByTestId('department-select');
    fireEvent.change(department, { target: { value: 'marketing' } });
    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('error-header')).toBeInTheDocument();
    expect(screen.queryByTestId('success-header')).not.toBeInTheDocument();
  });

  it('will display a success message if all fields provided.', () => {
    render(<ContactUsForm />);

    var email = screen.getByTestId('email-input');
    fireEvent.change(email, { target: { value: 'mike@test.com' } });
    var department = screen.getByTestId('department-select');
    fireEvent.change(department, { target: { value: 'marketing' } });
    var question = screen.getByTestId('question-textarea');
    fireEvent.change(question, { target: { value: 'What is your name' } });
    var submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByTestId('success-header')).toBeInTheDocument();
    expect(screen.queryByTestId('error-header')).not.toBeInTheDocument();
  });
});
