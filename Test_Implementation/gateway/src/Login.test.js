import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders email and password fields', () => {
    const page = render(<Login />);
    const emailField = screen.getByLabelText('Email');
    expect(emailField).toBeInTheDocument();

    const passwordField = page.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();
});

test('rejects empty email and password', () => {
    const page = render(<Login />);
    const passwordField = page.getByLabelText('Password');
    const submitButton = page.getByText('Submit');
    passwordField.value = 'password123';
    submitButton.click();
});