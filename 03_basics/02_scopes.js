var c = 300
let a = 300

if (true) {
    let a = 10 // local scope
    const b = 20 // local scope
    var c = 30 // global scope
    // console.log("INNER: ", a);
}

// console.log(a);
// // console.log(b);
// console.log(c);


function one() {
    const username = "Tarandeep"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "Tarandeep"
    if (username === "Tarandeep") {
        const website = " youtube"
        // console.log(username + website);        
    }
    // console.log(website);
}
// console.log(username)


// +++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}



addTwo(5) 
const addTwo = function(num) {  // this is called hosting in javascript
    return num + 2
}
