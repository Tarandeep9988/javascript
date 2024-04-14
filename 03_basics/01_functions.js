

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
// console.log(loginUserMessage("Tarandeep"))

function calculateCartPrice(val1, val2, ...num1) {   // Now it is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Tarandeep",
    prices: 199,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject(
    {
        username: "Tarandeep",
        price: 199,
    }
)

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500]));