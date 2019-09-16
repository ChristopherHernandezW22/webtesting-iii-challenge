// Test away!
import React from 'react';
import Display from './Display';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<Display />', () => {
    it('render without crash', () => {
        render(<Display />);
    });

    it('open & unlocked', () => {
        const { getByText, queryByText } = render(<Display closed={false} locked={false} />);

        // checking for correct text
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i);

        // verifying correct colors (css classes)
        // expect(unlock.className).toMatch(/green-led/i);
        expect(unlock).toHaveClass('green-led');

        // making sure incorrect text does not show up in the document
        expect(queryByText(/closed/i)).toBe(null);
    });


    it('closed & unlocked', () => {
        const { getByText } = render(<Display closed={true} locked={false} />);

        // checking for correct text
        getByText(/unlocked/i);
        getByText(/closed/i);
    });

    it('closed & locked', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);

        // checking for correct text
        getByText(/locked/i);
        getByText(/closed/i);
    });
});