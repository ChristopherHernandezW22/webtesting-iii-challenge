// Test away!
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup);
describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });
});