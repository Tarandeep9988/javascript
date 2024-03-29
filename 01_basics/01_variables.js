const accountId = 144553
let acccountEmail = "tarandeepsingh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // NOT allowed

acccountEmail = "tarandeep@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue of block scope and functional scope
*/


console.table([accountId, acccountEmail, accountPassword, accountCity, accountState]);