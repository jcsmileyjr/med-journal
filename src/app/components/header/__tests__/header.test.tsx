import {render, screen} from '@testing-library/react';
import Header from '../header';

describe('Header', () => {
    it('renders correctly', () => {
        render(<Header displayBack={false} />);
        expect(screen.getByText('Medical Journal')).toBeInTheDocument();
    }); 
    it('renders a link to the Settings page if displayBack is false', () => {
        render(<Header displayBack={false} />);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link"); // create an array of links
        expect(links).toHaveLength(1); // check that there is 1 link
        expect(links[0].href).toContain("/setting"); // check that the link is to the settings page
    });
    it('renders a "Back" link if displayBack is true', () => {
        render(<Header displayBack={true} />);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link"); // create an array of links
        expect(links).toHaveLength(1); // check that there is 1 link
        expect(links[0].href).toContain("/"); // check that the link is to the home page
        expect(screen.getByText('Back')).toBeInTheDocument();  
    });          
})
