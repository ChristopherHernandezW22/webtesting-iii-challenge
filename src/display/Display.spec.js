// Test away!
import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';

describe('<Display />', () => {
    it('render without crash', () => {
        render(<Display />);
    });

    it('open/unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        getByText(/unlocked/i);
        getByText(/open/i);
    });
});