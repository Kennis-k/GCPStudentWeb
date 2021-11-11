import { render, screen } from '@testing-library/react';
import AboutUS from './AboutUS';

test('renders learn react link', () => {
    render(<AboutUS />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
