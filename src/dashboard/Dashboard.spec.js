// Test away
import React from 'react';
import { render, cleanup } from '@testing-library/react/pure';
import Dashboard from './Dashboard';

describe('<Dashboard', () => {
    beforeEach(cleanup);
    it('render without crashing', () => {
        render(<Dashboard />);
    });
});


describe('<Dashboard /> state transitions', () => {
    const { getByText } = render (<Dashboard />);
    it('default state open and unlocked', () => {
        
        //verify open & unlocked
        getByText(/^open$/i);
        getByText(/^unlocked$/i);

        const lockButton = getByText(/^lock gate$/i);
        const closeButton = getByText(/^close gate$/i);
    });
});