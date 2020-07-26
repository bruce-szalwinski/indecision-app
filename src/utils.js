console.log('utils.js is running')

const square = (x) => x*x
const add = (a,b) => a + b

export const isAdult = (x) => x > 18
export const canDrink = (x) => x > 21

export {square, add}
