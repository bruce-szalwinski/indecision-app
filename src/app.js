class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePickOption = this.handlePickOption.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)
            if (options) {
                this.setState((p) => ({options: options}))
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        if (prevState.options.length != this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options))
        }
    }

    componentWillUnmount() {
        console.log("conmopnentWillUnmount")
    }

    handleDeleteOption(optionToRemove) {
        this.setState((p) => ({
            options: p.options.filter((option) => option !== optionToRemove)
        }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value'

        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }

        // can't manipulate the previous state, must instead return an new version
        this.setState((p) => ({
            options: p.options.concat(option)
        }))
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
                    handleDeleteOption={this.handleDeleteOption}
                    handleRenderOptions={this.handleRenderOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

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

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get started</p>}
            <ol>
            {
                props.options.map((o) => {
                    return (
                        <Option
                            key={o}
                            option={o}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                })
            }
            </ol>

        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            >remove
            </button>
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
        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.option.value = ''
        }
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

