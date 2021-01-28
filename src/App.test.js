import { render, screen } from '@testing-library/react';
import App from './App';

import ReactDOM from 'react-dom';

import Card from './components/Card';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the correct content.', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Card />, root);
});
