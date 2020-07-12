class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            count: 0
        }
    }

    handleMinusOne() {
        console.log('handleMinusOne')
        this.setState((p) => {
            return {
                count: p.count - 1
            }
        })
    }

    handleAddOne() {
        console.log('handleAddOne')
        this.setState((p) => {
            return {
                count: p.count + 1
            }
        })
    }

    handleReset() {
        console.log('handleReset')
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
