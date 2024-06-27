import {render, screen} from '@testing-library/react';
import DashboardPrompt from '../DashboardPrompt';

describe('DashboardPrompt', () => {
    it('renders correctly', () => {
        render(<DashboardPrompt content='FreeStyle'/>);
        expect(screen.getByText('FreeStyle')).toBeInTheDocument();
    });          
    it('renders a link to the Journal page', () => {
        render(<DashboardPrompt content='FreeStyle'/>);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link"); // create an array of links
        expect(links).toHaveLength(1); // check that there is 1 link
        expect(links[0].href).toContain("/journal"); // check that the link is to the home page)
    });
})