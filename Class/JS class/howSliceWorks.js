const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract from index 1 to 3 (3 not included)
const part = fruits.slice(1, 3);
console.log(part);  // ['banana', 'cherry']

// Negative indices count from the end
const lastTwo = fruits.slice(-2);
console.log(lastTwo);  // ['date', 'elderberry']


const str = "JavaScript";

const sub = str.slice(4, 10);
console.log(sub);  // "Script"

const lastThree = str.slice(-3);
console.log(lastThree);  // "ipt"
