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
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {sections.title}
            </button>
        ))
    }

    renderContent() {
        const currentAccord = this.props.sections[this.state.currentAccordIndex]
        return (
            <p className='content'>
              {currentAccord.content}
            </p>
        )
    }

    render () {
        return (
            <div>
                <ul>
                    <li>{this.renderButtons()}{this.renderContent()}</li>
                </ul>
            </div>
        )
    }
}

export default Accordion;