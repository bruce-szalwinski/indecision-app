import subtract, {square, add} from "./utils.js"
import isSenior, {canDrink, isAdult} from "./person.js"
import validator from 'validator'
import React from 'react'
import ReactDom from 'react-dom'


console.log("app.js is running!!!!!")
console.log('square: ' + square(4))
console.log('add: ' + add(3,4))
console.log('subtract: ' + subtract(4,0))
console.log('canDrink: ' + canDrink(4))
console.log('isAdult: ' + isAdult(40))
console.log('isSenior' + isSenior(100))
console.log('isEmail: ' + validator.isEmail('foo@foo.com'))

const template = <p>testing</p>

ReactDom.render(template, document.getElementById('app'))
