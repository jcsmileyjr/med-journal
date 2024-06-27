import {render, screen} from '@testing-library/react';
import Dashboard from '../dashboard';

describe('Dashboard', () => {
    it('renders correctly', () => {
        render(<Dashboard />);
        expect(screen.getByText('Click')).toBeInTheDocument();
    });
    it('renders a prompt', () => {
        render(<Dashboard />);
        expect(screen.getByText('FreeStyle')).toBeInTheDocument();
    });
    it('renders a button link to the logs', () => {
        render(<Dashboard />);
        expect(screen.getByText('View Logs')).toBeInTheDocument();
        const links: HTMLAnchorElement[] = screen.getAllByRole("link"); // create an array of links
        expect(links[6].href).toContain("/logs"); // check that the link is to the logs page
    });           
})

