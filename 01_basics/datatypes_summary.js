// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
// Reference (Non primitive)


const bigNumber = 5164515135549848564864546n


// Array, Objects, Functions

const heros = ["shakiman", "naagraj", "doga"]
let myObj = {
    name: "Tarandeep",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof Object)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Tarandeep";

let anothername = myName;
anothername = "Tarandeep Singh"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "noemail"
console.log(userOne)
console.log(userTwo)