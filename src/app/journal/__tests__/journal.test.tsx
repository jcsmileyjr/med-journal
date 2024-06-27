import {render, screen} from '@testing-library/react';
import Journal from '../page';

describe('Journal', () => {
    it('renders the Header', () => {
        render(<Journal />);
        expect(screen.getByText('Medical Journal')).toBeInTheDocument();
    });
});

