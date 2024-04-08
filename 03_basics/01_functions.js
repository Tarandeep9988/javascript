

function sayHello() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayHello() // reference

// sayHello() // function execution

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(1, "4")
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return "";
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Tarandeep"))
console.log(loginUserMessage("Tarandeep"))