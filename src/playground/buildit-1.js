let visibility = false

const appRoot = document.getElementById('app')

const showDetails = () => {
    if (visibility) {
        return (
            <p>here are some details</p>
        )
    }
}

const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
            {showDetails()}

        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()
