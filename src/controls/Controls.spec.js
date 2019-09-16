// Test away!
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup);
describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });

    it('open and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();
        const { getByText } = render(<Controls closed={false}
                                                locked={false}
                                                toggleClosed={closeSpy}
                                                toggleLocked={lockSpy}
                                                />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);

        // verifying disabled button
        expect(closeButton.disabled).toBeFalsy();
        expect(lockButton.disabled).toBeTruthy();

        // verifying button click status
        fireEvent.click(closeButton);
        expect(closeSpy).toBeCalled();
    });
});