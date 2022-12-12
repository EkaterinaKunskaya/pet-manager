import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
    const root = ReactDOM.createRoot(document.createElement('div'));
    root.render(<App />);
});

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });