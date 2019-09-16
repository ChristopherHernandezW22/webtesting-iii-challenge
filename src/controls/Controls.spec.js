// Test away!
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup);
describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });

    it('open and unlocked', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);

        
        expect(closeButton.disabled).toBeFalsy();
        expect(lockButton.disabled).toBeTruthy();
    });
});