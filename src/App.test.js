import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/What the fuck/);
  expect(paragraphElement).toBeInTheDocument();
  const linkElement = screen.getByText(/github actions/i);
  expect(linkElement).toBeInTheDocument();
});
