const name = "Tarandeep"
const repoCount = 50

console.log(`Hello my name is ${name[0]} and my repo count is ${repoCount}`); // `` backticks -> called iss string interpolation
const gameName = new String('Taran-deep-Singh')

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.indexOf('a'));

const newString = gameName.substring(-8, 4); // We can't give negative values
console.log(newString);

const anotherString = gameName.slice(-7, 4) // We can give negative values

console.log(anotherString);


const newStringOne = "   Tarandeep     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))


console.log(url.includes('sundar'))

console.log(gameName.split('-'));