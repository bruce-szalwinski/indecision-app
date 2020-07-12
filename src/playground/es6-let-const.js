var nameVar = 'bruce'
var nameVar = 'Mike'

console.log('nameVar', nameVar)

let nameLet = 'Bruce'
nameLet = "foo"

console.log('nameLet', nameLet)

const nameConst= "bruce"
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Hal'
    return petName
}


// block scoping

var fullName = "bruce szalwinski"
if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
