// Test away!
import React from 'react';
import Display from './Display';
import { render, queryByText } from '@testing-library/react';

describe('<Display />', () => {
    it('render without crash', () => {
        render(<Display />);
    });

    it('open/unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        
        // checking for correct text
        getByText(/unlocked/i);
        getByText(/open/i);

        // making sure incorrect text does not show up in the document
        expect(queryByText(/closed/i)).toBe(null);
    });
});