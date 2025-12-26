import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Header Page Test Case', () => {
  test('Should load header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('Should change login button to logout on click', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const btn = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(btn);
    const logoutBtn = screen.getByRole('button', { name: 'Logout' });
    expect(logoutBtn).toBeInTheDocument();
  });
});
