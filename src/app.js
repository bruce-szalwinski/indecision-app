class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePickOption = this.handlePickOption.bind(this)

        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value'

        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }

        this.setState((p) => {
            return {
                // can't manipulate the previous state, must instead return an new version
                options: p.options.concat(option)
            }
        })
    }

    handlePickOption() {
        const n = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[n])
    }

    render() {

        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleRenderOptions={this.handleRenderOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    option: []
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

 Header.defaultProps = {
     title: "Indecision App"
 }

// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePickOption}
//                     disabled={(!this.props.hasOptions)}
//                 >What should i do?
//                 </button>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={(!props.hasOptions)}
            >What should i do?
            </button>
        </div>
    )
}

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ol>
//                 {
//                     this.props.options.map((o) => {
//                         return (
//                             <Option key={o} option={o} />
//                         )
//                     })
//                 }
//                 </ol>

//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
            {
                props.options.map((o) => {
                    return (
                        <Option key={o} option={o} />
                    )
                })
            }
            </ol>

        </div>
    )
}

// class Option extends React.Component {

//     render() {
//         return (
//             <div>
//             {this.props.option}
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
        {props.option}
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return {error}
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp  />, document.getElementById('app'))

