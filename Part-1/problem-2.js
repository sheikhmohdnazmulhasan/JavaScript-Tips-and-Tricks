// Convert any value to boolean

// If we precede a value with two (!!) symbols, we can see the boolean value of that variable as true or false.

const player = 'Shakib Al Hasan'
console.log(!!player); //true

const number = 1
console.log(!!number); //true

const negativeNumber = 0
console.log(!!negativeNumber); //false

const fallacy = undefined;
console.log(!!fallacy); //false
