import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paragraphElement = screen.getByText(
    /Semantic release with github actions/
  );
  expect(paragraphElement).toBeInTheDocument();
  const linkElement = screen.getByText(/^Use react$/);
  expect(linkElement).toBeInTheDocument();
});
