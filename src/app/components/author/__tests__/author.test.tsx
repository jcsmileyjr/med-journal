import {render, screen, fireEvent} from '@testing-library/react';
import Author from '../author';

// Mock useRouter:
jest.mock("next/navigation", () => ({
useRouter() {
    return {
        prefetch: () => null
        };
    } 
}));

describe('Author', () => {
    it('renders correctly', () => {
        render(<Author content="Wellness Check-in" _id={"none"} />);
        expect(screen.getByText("Let's talk about your wellness check-in")).toBeInTheDocument();
    });
});
