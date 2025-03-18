// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Priya",
    "full name": "Priya Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "priya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser["full name"]);

const greeting=function(){
    console.log("hellloooo");
}

JsUser.greetingTwo=function(){
    console.log(`Hello ${this.name}`);
}


console.log(greeting);
console.log(greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);




