import React from 'react';

const milliseconds = 1000

setInterval(
    function callback () {

    },
    milliseconds
)

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount () {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render () {
        const count = this.state.count;
        let ticktock;
        if (count >= 8) {
            ticktock = 'BOOM!!!!'
        }
        else if (count % 2 === 0) {
            ticktock = 'tick'
        }
        else {
            ticktock = 'tock'
        }
        return (
            <div>
                <p>{ticktock}</p>
            </div>
        )
    }
}

export default Bomb;