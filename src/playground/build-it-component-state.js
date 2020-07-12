class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visibility: true
        }
    }

    handleVisibility() {
        this.setState((p) => {
            return {
                visibility: !p.visibility
            }
        })

    }

    showDetails() {
        if (this.state.visibility) {
            return (
                <p>here are some details</p>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.showDetails()}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))



// let visibility = false

// const appRoot = document.getElementById('app')

// const showDetails = () => {
//     if (visibility) {
//         return (
//             <p>here are some details</p>
//         )
//     }
// }

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
//             {showDetails()}

//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()
