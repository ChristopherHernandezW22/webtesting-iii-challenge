// Test away
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })
    it('default state open and unlocked', () => {
        const { getByText } = render (<Dashboard />);
        
        //verify open & unlocked
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        const lockButton = getByText(/^lock gate$/i);
        const closeButton = getByText(/^close gate$/i);
    })
})