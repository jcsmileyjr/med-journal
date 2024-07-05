import {render, screen} from '@testing-library/react';
import Journal from '../page';

xdescribe('Journal', () => {
    it('renders the Header', () => {
        render(<Journal />);
        expect(screen.getByText('Medical Journal')).toBeInTheDocument();
    });
});

