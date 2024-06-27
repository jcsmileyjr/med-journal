import {render, screen} from '@testing-library/react';
import Logs from '../page';

describe('Logs', () => {
    it('renders the Header', () => {
        render(<Logs />);
        expect(screen.getByText('Medical Journal')).toBeInTheDocument();
    });
});