import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {MemoryRouter} from "react-router-dom";

describe('TEST APP', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        const citiesLink = screen.getByTestId('cities-link')
        const citiesDetailsLink = screen.getByTestId('cities-details-link')
        userEvent.click(citiesLink)
        expect(screen.getByTestId('cities-page')).toBeInTheDocument();
        userEvent.click(citiesDetailsLink)
        expect(screen.getByTestId('cities-details-page')).toBeInTheDocument();
    });

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/error']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
})
