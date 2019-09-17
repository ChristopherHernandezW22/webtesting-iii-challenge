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

        fireEvent.click(lockButton);
        expect(lockSpy).not.toBeCalled();
    });


    it('closed and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();
        const { getByText } = render(<Controls closed={true}
                                                locked={false}
                                                toggleClosed={closeSpy}
                                                toggleLocked={lockSpy}
                                                />);
        const closeButton = getByText(/open gate/i);
        const lockButton = getByText(/lock gate/i);

        // verifying disabled button
        expect(closeButton.disabled).toBeFalsy();
        expect(lockButton.disabled).toBeFalsy();

        // verifying button click status
        fireEvent.click(closeButton);
        expect(closeSpy).toBeCalled();

        fireEvent.click(lockButton);
        expect(lockSpy).toBeCalled();
    });


    it('closed and locked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();
        const { getByText } = render(<Controls closed={true}
                                                locked={true}
                                                toggleClosed={closeSpy}
                                                toggleLocked={lockSpy}
                                                />);
        const closeButton = getByText(/open gate/i);
        const lockButton = getByText(/unlock gate/i);

        // verifying disabled button
        expect(closeButton.disabled).toBeTruthy();
        expect(lockButton.disabled).toBeFalsy();

        // verifying button click status
        fireEvent.click(closeButton);
        expect(closeSpy).not.toBeCalled();

        fireEvent.click(lockButton);
        expect(lockSpy).toBeCalled();
    });
});