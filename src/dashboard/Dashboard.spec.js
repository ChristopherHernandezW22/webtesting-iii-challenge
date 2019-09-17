// Test away
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })
})