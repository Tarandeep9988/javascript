const user = {
    username: "Tarandeep",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this is used for current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Tarandeep"
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "Tarandeep"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Tarandeep"
    console.log(this);
}

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
} // arrow function


// const addtwo = (num1, num2) => num1 + num2   // implicit return arrow function                                          

// const addtwo = (num1, num2) => (num1 + num2)   // implicit return arrow function                                          

const addtwo = (num1, num2) => ({username: "Tarandeep"})

console.log(addtwo(3, 4));


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(())