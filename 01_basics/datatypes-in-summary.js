// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100  
const scoreVal  = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 34587984622654755451n



// Refernece (Non primitive)

// Array, Objects, Functions


const heroes = ["shaktimam", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);




// ++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);