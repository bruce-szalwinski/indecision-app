class Person {

    constructor(name = 'default', title = 'sir') {
        this.name = name
        this.title = title
    }

    getGreeting() {
        return `Hi ${this.name} ${this.title}`
    }
}


class Person2 {

    constructor(props = {}) {
        this.props = props
    }

    getGreeting() {
        return `Hi ${this.props.name} ${this.props.title}`
    }

    getDescription() {
        return `${this.props.name}`
    }
}

class Student extends Person2 {

    constructor(props) {
        super(props)
    }

    hasMajor() {
        return !!this.props.major
    }

    getDescription() {
        let d = super.getDescription()
        if (this.hasMajor()) {
            d += ` major: ${this.props.major}`
        }
        return d
    }

}

class Traveler extends Person2 {

    constructor(props) {
        super(props)
    }

    hasHomeLocation() {
        return !!this.props.homeLocation
    }

    getDescription() {
        let d = super.getDescription()

        if (this.hasHomeLocation()) {
            d += ` location: ${this.props.homeLocation}`
        }

        return d
    }
}

// const p = new Person('bruce')
// const b = new Person('susan')
// console.log(new Person().getGreeting())
// console.log(new Person2({name: "bruce", title: "sir"}).getGreeting())

const s = new Student({name: "bruce", title: "sir", major: "bsee"})
console.log(s.getGreeting())
console.log(s.getDescription())
console.log(s.hasMajor())

const t = new Traveler({name: "bruce", title: "sir"})
console.log(t.getDescription())
