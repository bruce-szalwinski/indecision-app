console.log("app.js is running")

const app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
}

function getOptions(options) {
    if (options.length) {
        return (
            <p>Here are some options</p>
        )
    } else {
        return (
            <p>No options</p>
        )
    }
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {getOptions(app.options)}

        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const user = {
    name: "Bruce",
    age: 54,
    location: "austin"
}

function getLocation(location) {
    if (location) {
        return (
            <p>Location: {location}</p>
        )
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : "anonymous"}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age >= 18 && user.age}</p>}
        {getLocation(user.location)}

    </div>

)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
