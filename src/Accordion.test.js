import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

describe('Accordion component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})