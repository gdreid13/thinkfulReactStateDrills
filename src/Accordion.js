import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [{
            title: 'Default title',
            content: 'Default content',
        }]
    };
    state = {
        currentAccordIndex: 0
    };

    handleButtonClick(index) {
        this.setState ({
            currentAccordIndex: index
        })
    }
    
    renderButtons() {
        return this.props.sections.map((sections, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {sections.title}
                </button>
                {this.renderContent(index)}
            </li>
        ))
    }

    renderContent(index) {
        const currentAccord = this.props.sections[this.state.currentAccordIndex]
        if (index === this.state.currentAccordIndex) {
            return (
                <p className='content'>
                {currentAccord.content}
                </p>
            )
        }
    }

    render () {
        return (
            <div>
                <ul>
                    {this.renderButtons()}
                </ul>
            </div>
        )
    }
}

export default Accordion;