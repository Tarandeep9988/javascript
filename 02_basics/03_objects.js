// singleton
// Object.create


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Tarandeep",
    "full name": "Tarandeep Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Punjab",
    email: "tarandeep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "tarandeep@gpt.com"
// Object.freeze(jsUser)
jsUser.email = "tarandeep@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting2());