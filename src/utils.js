console.log('utils.js is running')

const square = (x) => x*x
const add = (a,b) => a + b
// two statements
const subtract = (a,b) => a - b
export default subtract

// one statement
// export default (a,b) => a-b
export {square, add}
