// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 3, 5)
// let myCreatedDate = new Date(2024, 3, 5, 8, 59, 59)
// let myCreatedDate = new Date("2024-04-14")
let myCreatedDate = new Date("04-05-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday: "long",
})