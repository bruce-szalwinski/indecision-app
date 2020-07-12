// arguments ojbect - no longer bound
// this keyword - no longer bound


const add = function(a,b) {
    console.log(arguments)
    return a+b
}

console.log(add(55,1, 1001))


const add2 = (a,b) => {
    // this no longer works in es6
    //console.log(arguments)
    return a+b
}


const user = {
    name: 'bruce',
    cities: ['austin', 'norman', 'kansas'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    multiply(nums, multiplyBy) {
        return nums.map((num) => multiplyBy * num)
    }
}

console.log(multiplier.multiply([1,2,3], 6))

